'use client'

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import css from './index.module.scss'
import iconVk from './icons/vk.svg'
import iconTg from './icons/tg.svg'
import { RootState } from "@/app/store";
import { setLogged } from "@/features/auth";
import { setModalAuth } from "@/features/modals";
import Modal, {ButtonClose} from "@/components/core/Modal";
import Card, {CardBody, CardFooter} from "@/components/core/Card";
import { Input } from "@/components/core/Input";
import Button from "@/components/core/Button";
import Typography from "@/components/core/Typography";
import Box from "@/components/core/Box";
import Stack from "@/components/core/Stack";


export default function ModalAuth() {
    const dispatch = useDispatch()
    const modalAuth = useSelector((state: RootState) => state.modals.modalAuth)

    return <Modal active={modalAuth} className={css.modal} setActive={(value: boolean) => dispatch(setModalAuth(value))}>
        <Card>
            <CardBody>
                <Stack fullWidth>
                    <Typography variant="h3">Войти</Typography>
                    <ButtonClose onClick={() => dispatch(setModalAuth(false))} />
                </Stack>
                <Box mb={1}>
                    <Button
                        fullWidth
                        animated
                        onClick={ () => {dispatch(setLogged(true)); dispatch(setModalAuth(false))} }
                        iconEnd={<Image className={css.socialIcon} src={iconVk} alt='vk' />}
                        className={css.buttonVk}
                    >
                        Вконтакте
                    </Button>
                </Box>
                <Box>
                    <Button
                        fullWidth
                        animated
                        onClick={ () => {dispatch(setLogged(true)); dispatch(setModalAuth(false))} }
                        iconEnd={<Image className={css.socialIcon} src={iconTg} alt='vk' />}
                        className={css.buttonTg}
                    >
                        Telegram
                    </Button>
                </Box>
            </CardBody>
            <CardFooter>
                <Box mb={1}>
                    <Input
                        size="sm"
                        label="Для разработчиков"
                        placeholder="Введите KWT-токен"
                        fullWidth
                    />
                </Box>
                <Button fullWidth size="sm" onClick={ () => {dispatch(setLogged(true)); dispatch(setModalAuth(false))} }>Войти</Button>
            </CardFooter>
        </Card>
    </Modal>
}