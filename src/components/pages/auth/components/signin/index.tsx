import { Formik, Field, Form } from 'formik'
import React, { useState } from 'react'
import { SigninProps } from './types';
import logo from "../../../../../assets/images/logo.svg";
import {initialValues, validationSchema} from "../signup/helper";
import {AiOutlineEye, AiOutlineUser, AiOutlineEyeInvisible} from "react-icons/ai";
import {Link} from "react-router-dom";
import styles from '../../styles'
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks";
import {API_URLS} from "../../../../../constants/api";
import {SigninApi} from "../../../../../api/signin.api";

const {Logo, SignDiv, InputBlock, InputBorder , SwitchBlock , ButtonBlock} = styles

export const Signin = (props: SigninProps): JSX.Element => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const {loading } = useAppSelector(state => state.loadingReducer)
    const dispatch = useAppDispatch()
    const {postRequest} = SigninApi(dispatch)

    const loginHandler =async  (values: typeof initialValues) => {
        try {
            await postRequest(API_URLS.signin, JSON.stringify({...values}))
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
                onSubmit={(values, {resetForm}) => loginHandler(values)}
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
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Write your password"
                                />
                                <div onClick={() => setShowPassword(showPassword ? false : true)}>
                                    {
                                        showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>
                                    }
                                </div>
                            </InputBorder>
                            <span>{errors.password}</span>
                            <div><Link to="/recovery-password">Forgot your password?</Link></div>
                        </InputBlock>
                        <ButtonBlock>
                            <button type="submit" disabled={loading}>Signin</button>
                        </ButtonBlock>
                        <SwitchBlock>
                            You don't have account?<Link to="/signup">/Signup</Link>
                        </SwitchBlock>
                    </Form>
                )}
            </Formik>
        </SignDiv>
    )
}