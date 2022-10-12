import { Signin } from "./components/signin"
import { Signup } from "./components/signup"
import {Recovery} from "./components/recovery";

export const AuthPage = () => {
    return {
        signin: <Signin />,
        signup: <Signup />,
        recovery: <Recovery />
    }
}