import React, {useEffect, useState} from 'react';
import {ModalBlock} from './styles'
import {useAppSelector} from "../../../store/hooks";


export const Modal = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const {error} = useAppSelector(state => state.loadingReducer)

    useEffect(() => {
        if (error) {
            setShowModal(true)

            const timeout = setTimeout(() => {
                setShowModal(false)
            }, 5000)

            return () => clearTimeout(timeout)
        }
    }, [error])

    return (
        <ModalBlock
            onClick={() => setShowModal(false)}
            error={error ? true : false}
            showModal={showModal}>
            {error}
        </ModalBlock>
    );
};

