import React, {useEffect, useState} from 'react';
import {ModalBlock} from './styles'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiError} from "react-icons/bi"
import {setFailedMessage, setSuccessMesssage} from "../../../store/reducers/loading/actions";

export const Modal = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const {successMessage, failedMessage} = useAppSelector(state => state.loadingReducer)

    useEffect(() => {

        if (successMessage || failedMessage) {
            setShowModal(true)

            const timeout = setTimeout(() => {
                setShowModal(false)
            }, 5000)

            return () => clearTimeout(timeout)
        }
    }, [successMessage, failedMessage])

    return (
        <ModalBlock
            onClick={() => setShowModal(false)}
            error={failedMessage ? true : false}
            showModal={showModal}>
            <div>{failedMessage ? <BiError />:<IoMdNotificationsOutline />}</div>
            {failedMessage || successMessage}
        </ModalBlock>
    );
};

