import './globals.css'

export const metadata = {
  title: 'Google clone',
  description: 'Created by Siddharth',
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
