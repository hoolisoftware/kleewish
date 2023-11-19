import Container from '@/components/core/Container'
import Card, { CardBody, CardHead, CardFooter } from '@/components/core/Card'
import { Input } from '@/components/core/Input'
import Button from '@/components/core/Button'

export default function CardKit() {
    return  <Container>
        <Card variant="outlined" style={{ maxWidth: '300px', margin: '50px auto' }}>
            <CardHead>Card head</CardHead>
            <CardBody>
                <Input
                    label="Введите Genshin UID"
                    placeholder="Например 84258"
                    fullWidth
                />
            </CardBody>    
            <CardFooter>
                <Button fullWidth>Submit</Button>
            </CardFooter>
        </Card>
        <Card variant="contained" style={{ maxWidth: '300px', margin: '50px auto' }}>
            <CardHead>Card head</CardHead>
            <CardBody>
                <Input
                    label="Введите Genshin UID"
                    placeholder="Например 84258"
                    fullWidth
                />
            </CardBody>    
            <CardFooter>
                <Button fullWidth>Submit</Button>
            </CardFooter>
        </Card>
        <Card variant="outlined" style={{ maxWidth: '300px', margin: '50px auto' }}>
            <CardHead transparent>Card head</CardHead>
            <CardBody>
                <Input
                    label="Введите Genshin UID"
                    placeholder="Например 84258"
                    fullWidth
                />
            </CardBody>    
            <CardFooter transparent>
                <Button fullWidth>Submit</Button>
            </CardFooter>
        </Card>
    </Container>
}