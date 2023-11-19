'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';

import { RootState } from '@/app/store';
import { setLogged } from '@/features/auth';
import { setModalAuth } from '@/features/modals';
import css from './index.module.scss'
import logo from './logo/logo.svg'
import logoDark from './logo/logo-dark.svg'
import StickyHeader from '@/components/core/StickyHeader';
import Container from '@/components/core/Container';
import Button from '@/components/core/Button';
import ThemeSwitch from '@/components/ThemeSwitch';
import Avatar from '@/components/Avatar';
import ButtonMora from './ButtonMora';


const menu: {
    name: string
    href: string
}[] = [
    {
        name: 'Кейсы',
        href: '/'
    },
    {
        name: 'Магазин',
        href: '/shop'
    },
    {
        name: 'Отзывы',
        href: '/reviews'
    },
    {
        name: 'Отзывы',
        href: '/reviews'
    },
]

export default function Header() {
    const pathname = usePathname()
    const dispatch = useDispatch()
    const logged = useSelector((state: RootState) => state.auth.logged)

    return <StickyHeader>
        <Container className={ css.header }>
            <div className={ css.section }>
                <div className={ css.burger }>
                    <MenuIcon/>
                </div>
                <Image className={ css.logo } src={logo} alt='logo'/>
                <Image className={ css.logoDark } src={logoDark} alt='logo'/>
            </div>
            <nav className={ css.menu }>
                {
                    menu.map((item, index) =>
                        <Link
                            key={ index }
                            href={ item.href }
                            className={ [css.item, item.href === pathname && css.itemActive].join(' ') }
                        >
                            { item.name }
                        </Link>
                    )
                }
            </nav>
            <div className={ css.section }>
                <div className={ css.themeSwitch }>
                    <ThemeSwitch/>
                </div>
                <ButtonMora/>
                <Link href='/profile'>
                    <Avatar/>
                </Link>
                {
                    logged ?
                        <Button size='sm' color='error' onClick={ () => dispatch(setLogged(false)) }>Выйти</Button>
                    :
                        <Button size='sm' onClick={ () => dispatch(setModalAuth(true)) }>Войти</Button>
                }
            </div>
        </Container>
    </StickyHeader>
}