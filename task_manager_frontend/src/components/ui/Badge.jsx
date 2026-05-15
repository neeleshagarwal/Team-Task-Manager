// Colored badge for status and priority
// Usage: <Badge variant="status" value="IN_PROGRESS" />

const STATUS_STYLES = {
  TODO:        'bg-slate-200 text-slate-700',
  IN_PROGRESS: 'bg-blue-100/90 text-blue-700 border border-blue-200',
  IN_REVIEW:   'bg-amber-100/90 text-amber-700 border border-amber-200',
  DONE:        'bg-emerald-100/90 text-emerald-700 border border-emerald-200',
}

const STATUS_LABELS = {
  TODO: 'To Do', IN_PROGRESS: 'In Progress', IN_REVIEW: 'In Review', DONE: 'Done',
}

const PRIORITY_STYLES = {
  LOW:    'bg-slate-200 text-slate-700',
  MEDIUM: 'bg-amber-100/90 text-amber-700',
  HIGH:   'bg-red-100/90 text-red-600 border border-red-200',
}

const ROLE_STYLES = {
  ADMIN:  'bg-indigo-100/90 text-indigo-700 border border-indigo-200',
  MEMBER: 'bg-slate-200 text-slate-700',
}

export default function Badge({ variant = 'status', value, className = '' }) {
  let style = 'bg-slate-200 text-slate-700'
  let label = value

  if (variant === 'status')   { style = STATUS_STYLES[value]   || style; label = STATUS_LABELS[value]   || value }
  if (variant === 'priority') { style = PRIORITY_STYLES[value] || style }
  if (variant === 'role')     { style = ROLE_STYLES[value]     || style }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${style} ${className}`}>
      {label}
    </span>
  )
}
