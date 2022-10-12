import React, {useEffect, useState} from 'react';
import {ModalBlock} from './styles'
import {useAppSelector} from "../../../store/hooks";
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiError} from "react-icons/bi"

export const Modal = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const {error, message} = useAppSelector(state => state.loadingReducer)

    useEffect(() => {
        if (error || message) {
            setShowModal(true)

            const timeout = setTimeout(() => {
                setShowModal(false)
            }, 5000)

            return () => clearTimeout(timeout)
        }
    }, [error, message])

    return (
        <ModalBlock
            onClick={() => setShowModal(false)}
            error={error ? true : false}
            showModal={showModal}>
            <div>{error ? <BiError />:<IoMdNotificationsOutline />}</div>
            {error || message}
        </ModalBlock>
    );
};

