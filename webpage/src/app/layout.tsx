import type { Metadata } from 'next'
import '../css/reset.css'
import '../css/brand.css'

export const metadata: Metadata = {
  title: 'Fred Davison | Software Engineer',
  description: 'homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
