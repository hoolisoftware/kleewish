import css from './index.module.scss'
import { RocketLaunch } from "@mui/icons-material"
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

import type { ButtonSize, ButtonColor } from '@/components/core/Button';
import Box from '@/components/core/Box';
import Button from '@/components/core/Button';
import Container from '@/components/core/Container';
import Dots from '@/components/core/Dots';
import Scroller from '@/components/core/Scroller';
import Stack from '@/components/core/Stack';
import Typography from '@/components/core/Typography';
import Code from '@/components/core/Code';
import Header from '@/components/Header';


const sizes: ButtonSize[] = ['sm', 'md', 'lg']
const colors: ButtonColor[] = ['primary-gradient', 'primary', 'success', 'warning', 'error', 'gray']

const buttonCode =
`import { Button } from "@/components"

<Button
    size="<sm|md|lg>"
    color="<pirmary-gradient|primary|sucess|warning|error>"
    variant="<blank|contained>"
    className="<your class name>"
    style="<your styles>"
>
    Hello world
</Button>
`


export default function ButtonKit() {
    return <>
        <Container>
            <Typography variant="p">
                Welcome to Kleewish UI-kit! The button component logic described below!
            </Typography>
            <Typography variant="p">
                Use the following code to import Button and modify it :
            </Typography>
            <Code>
                { buttonCode }
            </Code>
            <br /><br />
            {
                sizes.map(size => 

                    <>
                        <Typography variant="h1">{ size } sized buttons</Typography>
                        <Scroller>
                            <Box mb={1}>
                                <Stack direction='horizontal' key={size} maxContent>
                                    
                                        {
                                            colors.map(color =>

                                                <div key={color}>
                                                    <Typography variant="p">{ color }</Typography>
                                                    <Button size={size} color={color}>Hello world!</Button>
                                                </div>   

                                            )
                                        }

                                        <div>
                                            <Typography variant="p">blank</Typography>
                                            <Button size={size} variant="blank">Hello world!</Button>
                                        </div>

                                </Stack>
                            </Box>
                        </Scroller>
                    </>

                )
            }
            <Typography variant="h1">states</Typography>
            <Typography variant="p">icon</Typography>
            <Box mb={1}>
                <Scroller>
                    <Stack maxContent>
                        {
                            sizes.map(size =>
                                <Button iconStart={<RocketLaunch/>} key={size} size={size}>Hello world!</Button>
                            )
                        }
                    </Stack>
                </Scroller>
            </Box>
            <Box mb={1}>
                <Scroller>
                    <Stack maxContent>
                        {
                            sizes.map(size =>
                                <Button iconEnd={<RocketLaunch/>} key={size} size={size}>Hello world!</Button>
                            )
                        }
                    </Stack>
                </Scroller>
            </Box>
            <Typography variant="p">animated</Typography>
            <Box mb={1}>
                <Scroller>
                    <Stack maxContent>
                        {
                            sizes.map(size =>
                                <Button animated key={size} size={size}>Hello world!</Button>
                            )
                        }
                    </Stack>
                </Scroller>
            </Box>
            <Typography variant="p">disabled</Typography>
            <Box mb={1}>
                <Scroller>
                    <Stack maxContent>
                        {
                            sizes.map(size =>
                                <Button disabled key={size} size={size}>Hello world!</Button>
                            )
                        }
                    </Stack>
                </Scroller>
            </Box>
            <Typography variant="p">loading (custom)</Typography>
            <Box mb={1}>
                <Scroller>
                    <Stack maxContent>
                        {
                            sizes.map(size =>
                                <Button disabled iconStart={<HourglassEmptyIcon className={ css.loadingAnimate }/>} key={size} size={size}>Loading<Dots/></Button>
                            )
                        }
                    </Stack>
                </Scroller>
            </Box>
        </Container>
    </> 
}