import { Formik, Field, Form } from 'formik'
import React from 'react'
import {Link} from 'react-router-dom'
import { SignupProps } from './types';
import {initialValues, validationSchema} from './helper'
import styles from '../../styles';
import {AiOutlineEye, AiOutlineUser} from 'react-icons/ai'
import logo from '../../../../../assets/images/logo.svg'
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks";
import {SignupApi} from "../../../../../api/signup.api";
import {API_URLS} from "../../../../../constants/api";

const {SignDiv, InputBlock, InputBorder, Logo, ButtonBlock, SwitchBlock} = styles;

export const Signup = (props: SignupProps): JSX.Element => {
    const dispatch = useAppDispatch()
    const {loading} = useAppSelector(state => state.loadingReducer)
    const {postRequest} = SignupApi(dispatch)

    const registerHandler =async  (values: typeof initialValues) => {
         try {
            await postRequest(API_URLS.signup, JSON.stringify({...values}))
         } catch (e) {}
    }

    return (
        <SignDiv>
            <Logo>
                <img src={logo} alt="logo"></img>
            </Logo>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {resetForm}) => registerHandler(values)}
            >
                {({errors}) => (
                    <Form>
                        <InputBlock>
                            <label htmlFor="username">Username</label>
                            <InputBorder>
                                <Field
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Write your username"
                                />
                                <AiOutlineUser />
                            </InputBorder>
                            <span>{errors.username}</span>
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor="password">Password</label>
                            <InputBorder>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Write your password"
                                />
                                <AiOutlineEye />
                            </InputBorder>
                            <span>{errors.password}</span>
                        </InputBlock>
                        <ButtonBlock>
                            <button type="submit" disabled={loading}>Signup</button>
                        </ButtonBlock>
                        <SwitchBlock>
                            You have account?<Link to="/signin">/Signin</Link>
                        </SwitchBlock>
                    </Form>
                    )}
            </Formik>
        </SignDiv>
    )
}