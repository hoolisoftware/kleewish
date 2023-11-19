import type { InputSize } from "@/components/core/Input"
import Box from '@/components/core/Box'
import Container from '@/components/core/Container'
import { Input } from '@/components/core/Input'
import { TextArea } from '@/components/core/Input'
import Scroller from '@/components/core/Scroller'
import Stack from '@/components/core/Stack'

const sizes: InputSize[] = ['sm', 'md', 'lg']

const inputCode =
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
    return <Container>
        {
            sizes.map(size =>

                <Scroller key={size}>
                    <Box mb={1}>
                        <Stack maxContent>
                            <Input
                                key={size}
                                size={size}
                                placeholder="Enter value here"
                                label="Some label"
                                error="Some error occured"
                            />
                            <Input
                                key={size}
                                size={size}
                                placeholder="Enter value here"
                                label="Some label"
                                error="Some error occured"
                                value="Some value"
                                disabled
                            />
                            <Input
                                key={size}
                                size={size}
                                placeholder="Enter value here"
                                label="Some label"
                                error="Some error occured"
                                defaultValue="Some value"
                                required
                            />
                            <Input
                                key={size}
                                size={size}
                                placeholder="Enter value here"
                                variant="outlined"
                                label="Some label"
                                error="Some error occured"
                            />
                        </Stack>
                    </Box>
                </Scroller>
            )
        }
        <TextArea fullWidth rows={10} placeholder="Enter you message here" label="11" defaultValue={'Some default value'}/>
    </Container>
}