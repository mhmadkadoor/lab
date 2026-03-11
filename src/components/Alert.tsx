import type { ReactNode } from 'react'

type AlertVariant = 'info' | 'success' | 'warning' | 'error'

type AlertProps = {
  children: ReactNode
  variant?: AlertVariant
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

const variantClasses: Record<AlertVariant, string> = {
  info: 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
  success: 'border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200',
  warning: 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
  error: 'border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200',
}

export default function Alert({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  return (
    <div role="alert" className={`rounded-r-lg border-l-4 p-4 ${variantClasses[variant]}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          {title && <p className="mb-1 font-semibold">{title}</p>}
          <p className="text-sm">{children}</p>
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className="opacity-60 transition hover:opacity-100"
            aria-label="Kapat"
          >
            X
          </button>
        )}
      </div>
    </div>
  )
}
