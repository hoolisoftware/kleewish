'use client'
import { useState } from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import Container from '@/components/core/Container'
import Modal from '@/components/core/Modal'
import { ButtonClose } from '@/components/core/Modal'
import Button from '@/components/core/Button'
import Card, { CardBody, CardHead, CardFooter } from '@/components/core/Card'
import { Input } from '@/components/core/Input'
import Stack from '@/components/core/Stack'



export default function ModalKit() {
    const [active, setActive] = useState(false)

    return <Container>
        <Button
            onClick={ () => setActive(true) }
            color='primary'
            iconStart={<RocketLaunchIcon/>}
            animated
        >
                Open modal
        </Button>
        <Modal active={active} setActive={setActive} style={{ maxWidth: '300px', margin: '0 auto' }}>
            <Card variant="outlined">
                <CardHead transparent>
                    <Stack fullWidth>
                        Добро пожаловать на сайт Kleewish.shop
                        <ButtonClose onClick={ () => setActive(false) }/>
                    </Stack>
                </CardHead>
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
        </Modal>
    </Container> 
}