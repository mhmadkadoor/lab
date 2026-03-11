import type { ReactNode } from 'react'

type CardVariant = 'elevated' | 'outlined' | 'filled'

type CardProps = {
  title?: string
  children: ReactNode
  image?: string
  imageAlt?: string
  footer?: ReactNode
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  elevated: 'bg-white shadow-md hover:shadow-lg dark:bg-slate-800',
  outlined: 'border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800',
  filled: 'bg-slate-100 dark:bg-slate-800/80',
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = 'elevated',
}: CardProps) {
  return (
    <article className={`overflow-hidden rounded-xl transition-shadow ${variantClasses[variant]}`}>
      {image && <img src={image} alt={imageAlt ?? ''} className="h-48 w-full object-cover" loading="lazy" />}

      <div className="p-5">
        {title && <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>}
        <div className="text-slate-600 dark:text-slate-300">{children}</div>
      </div>

      {footer && (
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-3 dark:border-slate-700 dark:bg-slate-900">
          {footer}
        </div>
      )}
    </article>
  )
}
