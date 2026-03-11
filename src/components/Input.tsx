import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string
  label?: string
  error?: string
  helpText?: string
}

export default function Input({ id, label, type = 'text', error, helpText, disabled, ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  const describedBy = error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined

  const stateClasses = error
    ? 'border-red-500 focus:ring-red-500'
    : 'border-slate-300 focus:ring-primary dark:border-slate-600'

  const disabledClasses = disabled
    ? 'cursor-not-allowed bg-slate-100 dark:bg-slate-800/70 opacity-80'
    : 'bg-white dark:bg-slate-800'

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <input
        {...props}
        id={inputId}
        type={type}
        disabled={disabled}
        aria-describedby={describedBy}
        className={`w-full rounded-lg border px-3 py-2 text-slate-900 transition-colors focus:outline-none focus:ring-2 dark:text-slate-100 ${stateClasses} ${disabledClasses}`}
      />
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${inputId}-help`} className="text-sm text-slate-500 dark:text-slate-400">
          {helpText}
        </p>
      )}
    </div>
  )
}
