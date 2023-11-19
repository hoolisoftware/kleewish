'use client'
import { useState } from "react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

import Button from '@/components/core/Button'
import Container from '@/components/core/Container'
import Drawer from '@/components/core/Drawer'


export default function DrawerKit() {
    const [active, setActive] = useState(false)

    return <Container>
        <Button
            onClick={ () => setActive(true) }
            color='primary'
            iconStart={<RocketLaunchIcon/>}
            animated
        >
                Open drawer
        </Button>
        <Drawer active={ active } setActive={ setActive }>
            Drawer
        </Drawer>
    </Container>
}