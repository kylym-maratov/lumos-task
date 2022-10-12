import React, {useEffect, useState} from 'react';
import {ModalBlock} from './styles'
import {useAppSelector} from "../../../store/hooks";


export const Modal = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const {error, message} = useAppSelector(state => state.loadingReducer)

    useEffect(() => {
        if (error || message) {
            setShowModal(true)

            console.log(error)

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
            {error || message}
        </ModalBlock>
    );
};

