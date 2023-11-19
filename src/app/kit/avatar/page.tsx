import noAvatar from './no-avatar.webp'
import { AvatarSize } from '@/components/core/Avatar'
import Container from '@/components/core/Container'
import Stack from '@/components/core/Stack'
import Avatar from '@/components/Avatar'


const sizes: AvatarSize[] = ['sm', 'md', 'lg']


export default function ButtonKit() {
    return <>
        <Container>
            <Stack>
                {
                    sizes.map(size =>
                        <Avatar
                            key={ size }
                            srcNo={ noAvatar }
                            size={ size }
                        />  
                        
                    )
                }
                {
                    sizes.map(size =>
                        <Avatar
                            key={ size }
                            src={ 'https://picsum.photos/200' }
                            size={ size }
                        />  
                        
                    )
                }
            </Stack>
        </Container>
    </> 
}