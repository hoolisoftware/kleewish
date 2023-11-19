import Header from '@/components/Header'
import ModalAuth from '@/components/ModalAuth'
import ModalDeposit from '@/components/ModalDeposit'


export default function PageLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <>
        <Header />
        {children}
        <ModalAuth />
        <ModalDeposit />
    </>
}