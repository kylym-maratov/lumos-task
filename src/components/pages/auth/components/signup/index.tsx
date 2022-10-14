import { Formik, Field, Form } from 'formik'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { SignupProps } from './types';
import {initialValues, validationSchema} from './helper'
import styles from '../../styles';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser} from 'react-icons/ai'
import logo from '../../../../../assets/images/logo.svg'
import {useAppDispatch, useAppSelector} from "../../../../../store/hooks";
import {SignupApi} from "../../../../../api/signup.api";
import {API_URLS} from "../../../../../constants/api";
import {setMessage} from "../../../../../store/reducers/loading/actions";

const {SignDiv, InputBlock, InputBorder, Logo, ButtonBlock, SwitchBlock} = styles;

export const Signup = (props: SignupProps): JSX.Element => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {loading} = useAppSelector(state => state.loadingReducer)
    const {postRequest} = SignupApi(dispatch)

    const registerHandler =async  (values: typeof initialValues) => {
         try {
            const data  = await postRequest(API_URLS.signup, JSON.stringify({...values}))
              dispatch(setMessage(data.message))
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
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Write your password"
                                />
                                <div onClick={() =>setShowPassword(showPassword ? false : true)}>
                                    {showPassword ? <AiOutlineEyeInvisible />  :  <AiOutlineEye  />}
                                </div>
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