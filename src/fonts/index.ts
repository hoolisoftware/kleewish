import localFont from 'next/font/local'


export const gilroy = localFont(
    {
        src: [
            {
                path: './gilroy/Gilroy-Light.woff',
                weight: '300',
                style: 'light'
            },
            {
                path: './gilroy/Gilroy-Regular.woff',
                weight: '400',
                style: 'normal'
            },
            {
                path: './gilroy/Gilroy-Medium.woff',
                weight: '500',
                style: 'medium'
            },
            {
                path: './gilroy/Gilroy-Bold.woff',
                weight: '700',
                style: 'bold'
            },
            {
                path: './gilroy/Gilroy-Heavy.woff',
                weight: '800',
                style: 'heavy'
            }
        ]
    }
)


