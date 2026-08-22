const ENDPOINT = 'https://api.web3forms.com/submit'

export type ContactPayload = {
  name: string
  email: string
  message: string
  /** Honeypot — real people leave this empty; bots fill it in. */
  botcheck: string
}

/**
 * The only outbound network call in this app (see ARCHITECTURE.md).
 * Throws on any failure so the UI can fail closed and show a real error
 * rather than a fake success.
 */
export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

  if (!accessKey) {
    throw new Error(
      'The contact form is not configured yet. Please email us directly.',
    )
  }

  let response: Response
  try {
    response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: 'New message from the Pahinga Coffee site',
        from_name: 'Pahinga Coffee',
        name: payload.name,
        email: payload.email,
        message: payload.message,
        botcheck: payload.botcheck,
      }),
    })
  } catch {
    // Network-level failure (offline, DNS, blocked request).
    throw new Error(
      "We couldn't reach the server. Check your connection and try again.",
    )
  }

  let result: { success?: boolean; message?: string } = {}
  try {
    result = await response.json()
  } catch {
    // Non-JSON response — fall through to the status check below.
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ?? 'Something went wrong sending your message.',
    )
  }
}
