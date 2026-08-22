import { useState } from 'react'
import { submitContactForm } from '../service'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
  'mt-1.5 w-full border border-walnut/30 bg-paper-card px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-brass'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [botcheck, setBotcheck] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isComplete =
    name.trim() !== '' && email.trim() !== '' && message.trim() !== ''
  const isSending = status === 'sending'

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!isComplete || isSending) return

    setStatus('sending')
    setErrorMessage('')

    try {
      await submitContactForm({ name, email, message, botcheck })
      setStatus('sent')
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong sending your message.',
      )
      setStatus('error')
      // Note: the typed values are deliberately left in place so nothing
      // the visitor wrote is lost on a failed send.
    }
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="border border-walnut/30 bg-paper-card px-6 py-10 text-center"
      >
        <p className="font-display text-xl text-walnut">Thank you — message sent.</p>
        <p className="mt-2 text-sm text-ink-muted">
          We'll get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label className="block">
        <span className="text-sm tracking-wide text-walnut">Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isSending}
          required
          className={fieldClass}
        />
      </label>

      <label className="mt-5 block">
        <span className="text-sm tracking-wide text-walnut">Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isSending}
          required
          className={fieldClass}
        />
      </label>

      <label className="mt-5 block">
        <span className="text-sm tracking-wide text-walnut">Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={isSending}
          required
          rows={5}
          className={`${fieldClass} resize-y`}
        />
      </label>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        checked={botcheck !== ''}
        onChange={(event) => setBotcheck(event.target.checked ? 'on' : '')}
        className="hidden"
      />

      {status === 'error' && (
        <p role="alert" className="mt-5 border-l-2 border-brass pl-3 text-sm text-ink">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!isComplete || isSending}
        className="mt-7 rounded-full border border-walnut-light px-6 py-2.5 text-sm font-medium text-brass transition-colors hover:bg-walnut hover:text-paper disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-brass"
      >
        {isSending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
