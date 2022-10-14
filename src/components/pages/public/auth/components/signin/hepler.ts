import * as Yup from "yup";
import {VALIDITION_MESSAGES} from "../../../../../../constants/validation";

export const validationSchema = Yup.object().shape({
    username: Yup.string().min(4, VALIDITION_MESSAGES.email).required(),
    password: Yup.string().min(8, VALIDITION_MESSAGES.password).required()
})

export const initialValues = {
    username: '',
    password: ''
}