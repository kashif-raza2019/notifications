import { Provider } from "@/components/ui/provider"

export const metadata = {
  title: 'One-Queue',
  description: 'One queue for all',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
