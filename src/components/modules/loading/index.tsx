import React, {useEffect, useRef} from 'react';
import {LoadingBlock} from './styles'
import {useAppSelector} from "../../../store/hooks";

export const Loading = () => {
    const loadingRef = useRef<HTMLDivElement>(null)
    const {loading } = useAppSelector(state => state.loadingReducer)

    return (
         <LoadingBlock loadingNow={loading} ref={loadingRef}>
              Loading...
         </LoadingBlock>
    );
};

