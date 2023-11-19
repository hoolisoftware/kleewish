'use client'

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import css from './index.module.scss'
import methodCard from './images/card.png'
import methodTether from './images/tether.png'
import { RootState } from "@/app/store";
import { setModalDeposit } from "@/features/modals";
import Modal, { ButtonClose } from "@/components/core/Modal";
import Card, {CardBody, CardFooter} from "@/components/core/Card";
import { Input } from "@/components/core/Input";
import Button from "@/components/core/Button";
import Typography from "@/components/core/Typography";
import Box from "@/components/core/Box";
import Stack from "@/components/core/Stack";


export default function ModalAuth() {
    const dispatch = useDispatch()
    const modalAuth = useSelector((state: RootState) => state.modals.modalDeposit)

    return <Modal active={modalAuth} className={css.modal} setActive={(value: boolean) => dispatch(setModalDeposit(value))}>
        <Card>
            <CardBody>
                <Stack fullWidth>
                    <Typography variant="h3">Пополнение</Typography>
                    <ButtonClose onClick={() => dispatch(setModalDeposit(false))} />
                </Stack>
                <Stack alignCenter> 
                    <div>
                        <label className={ css.labelCurrency }>рублей</label>
                        <Input className={ css.inputCurrency } fullWidth size="sm"></Input>
                    </div>
                    <span className={ css.equal }>
                        =
                    </span>
                    <div>
                        <label className={ css.labelCurrency }>мор</label>
                        <Input className={ css.inputCurrency } fullWidth size="sm"></Input>
                    </div>
                </Stack>
                <Box mt={1}>
                    <Input placeholder="Промокод" fullWidth></Input>
                </Box>
                <Box mt={1}>
                    <Stack fullWidth className={ css.methods }>
                        <Card className={ css.cardMethod } shadow={ false } variant="outlined">
                            <Image className={ css.cardMethodImage } src={methodCard} alt='card'></Image>
                        </Card>
                        <Card className={ css.cardMethod } shadow={ false } variant="outlined">
                            <Image className={ css.cardMethodImage } src={methodTether} alt='card'></Image>
                        </Card>
                    </Stack>
                </Box>
            </CardBody>
            <CardFooter>
                <Box mb={1}>
                    <Input
                        size='sm'
                        label="Для разработчиков"
                        placeholder="Введите чит для баланса"
                        fullWidth
                    />
                </Box>
                <Button fullWidth size="sm">Отправить</Button>
            </CardFooter>
        </Card>
    </Modal>
}