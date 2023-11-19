'use client'

import { ThemeProvider } from 'next-themes'
import ReduxProvider from '@/providers/ReduxProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>
        <ReduxProvider>
            {children}
        </ReduxProvider>
    </ThemeProvider>
}