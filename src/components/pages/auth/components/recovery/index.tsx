import { Formik, Field, Form } from 'formik'
import React, { useState } from 'react'
import logo from "../../../../../assets/images/logo.svg";
import {initialValues, validationSchema} from "./helper";
import {AiOutlineEye, AiOutlineUser, AiOutlineEyeInvisible} from "react-icons/ai";
import {Link} from "react-router-dom";
import styles from '../../styles'
import {API_URLS} from "../../../../../constants/api";
import {RecoveryApi} from "../../../../../api/recovery.api";
import {useAppDispatch} from "../../../../../store/hooks";

const {Logo, SignDiv, InputBlock, InputBorder , SwitchBlock , ButtonBlock} = styles

export const Recovery = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {postRequest} = RecoveryApi(dispatch)

    const recoveryHandler =async  (values: typeof initialValues) => {
        try {
            await postRequest('', JSON.stringify({...values}))
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
                onSubmit={(values, {resetForm}) => recoveryHandler(values)}
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
                            <label htmlFor="password">New password</label>
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
                        </InputBlock>
                        <ButtonBlock>
                            <button type="submit">Recovery</button>
                        </ButtonBlock>
                        <SwitchBlock>
                            Back to main<Link to="/signin">/Signin</Link>
                        </SwitchBlock>
                    </Form>
                )}
            </Formik>
        </SignDiv>
    )
}