import Container from '@/components/core/Container'
import Typography, { TypographyColor, TypographyVariant } from '@/components/core/Typography'


const variants: TypographyVariant[] = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'span'
]
const colors: TypographyColor[] = [
    'white',
    'black',
    'primary',
    'success',
    'warning',
    'error',
    'primary-gradient',
]


export default function TypographyKit() {
    return <Container>
        {
            variants.map(variant =>

                colors.map(color =>
                    <Typography
                        key={ variant }
                        variant={ variant }
                        color={ color }
                    >
                        Hello world
                    </Typography>
                )

            )
        }
    </Container>
}