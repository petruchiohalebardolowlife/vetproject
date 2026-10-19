interface Props {
  className?: string
}

/** Декоративный отпечаток лапы. */
export default function PawIcon({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" focusable="false">
      <ellipse cx="32" cy="42" rx="13" ry="10" />
      <ellipse cx="14" cy="28" rx="6" ry="8" />
      <ellipse cx="50" cy="28" rx="6" ry="8" />
      <ellipse cx="24" cy="15" rx="6" ry="8.5" />
      <ellipse cx="40" cy="15" rx="6" ry="8.5" />
    </svg>
  )
}
