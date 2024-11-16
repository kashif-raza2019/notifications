
export const metadata = {
  title: 'One-Queue',
  description: 'One queue for all',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html>
      <body>
      {children}
      </body>
    </html>
  )
}
