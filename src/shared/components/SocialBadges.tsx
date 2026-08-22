const channels = ['Messenger', 'Instagram', 'GrabFood']

export function SocialBadges() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {channels.map((channel) => (
        <li
          key={channel}
          className="rounded-full border border-paper/25 px-4 py-1.5 text-xs tracking-wide text-paper-muted"
        >
          {channel}
        </li>
      ))}
    </ul>
  )
}
