interface Props {
  message: string | null
}

export default function Toast({ message }: Props) {
  return (
    <div className="toast-region" role="status" aria-live="polite">
      {message && <div className="toast">{message}</div>}
    </div>
  )
}
