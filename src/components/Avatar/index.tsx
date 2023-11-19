import { StaticImageData } from 'next/image'

import noAvatar from './no-avatar.webp'
import { Props as BaseAvatarProps } from '@/components/core/Avatar'
import BaseAvatar from '@/components/core/Avatar'

interface Props extends Omit<BaseAvatarProps, 'srcNo'>
{
    srcNo?: StaticImageData
}


export default function Avatar(props: Props) {
    return <BaseAvatar
        { ...props }
        srcNo={ noAvatar }
    />
}