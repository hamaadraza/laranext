import { Nunito } from 'next/font/google'
import '@/app/global.css'
import { ReactNode } from 'react'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
