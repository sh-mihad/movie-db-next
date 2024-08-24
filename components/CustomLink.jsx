import Link from 'next/link'

export default function CustomLink({
  className,
  href,
  children
}) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  )
}
