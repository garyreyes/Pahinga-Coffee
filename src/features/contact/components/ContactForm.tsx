import { useState } from 'react'
import { submitContactForm } from '../service'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClass =
  'mt-1.5 w-full border border-[var(--tone-field-border)] bg-[var(--tone-field-bg)] px-3 py-2.5 text-sm text-[var(--tone-heading)] outline-none transition-colors focus:border-[var(--tone-accent)]'

const labelClass = 'text-sm tracking-wide text-[var(--tone-heading)]'

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
        className="border border-[var(--tone-field-border)] bg-[var(--tone-field-bg)] px-6 py-12 text-center"
      >
        <p className="font-display text-2xl text-[var(--tone-heading)]">
          Thank you — message sent.
        </p>
        <p className="mt-2 text-sm text-[var(--tone-body)]">
          We'll get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label className="block">
        <span className={labelClass}>Name</span>
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
        <span className={labelClass}>Email</span>
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
        <span className={labelClass}>Message</span>
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
        <p
          role="alert"
          className="mt-5 border-l border-[var(--tone-accent)] pl-3 text-sm text-[var(--tone-heading)]"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!isComplete || isSending}
        className="mt-8 rounded-full border border-[var(--tone-field-border)] px-7 py-3 text-sm font-medium text-[var(--tone-accent)] transition-colors hover:bg-[var(--tone-hover-bg)] hover:text-[var(--tone-hover-fg)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[var(--tone-accent)]"
      >
        {isSending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
