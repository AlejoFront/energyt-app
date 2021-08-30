import {useState} from 'react'
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }
    const handleInputChange = ({target}) => {
        switch (target.type) {
            case TEXT:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            case TEXTAREA:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                    })
                )
            case FILE:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.files[0]
                     })
                )
            case DATE:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            case NUMBER:
                return  (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            case EMAIL:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            case CHECKBOX:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.checked
                     })
                )
            case PASSWORD:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            case PHONE:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            case SELECT:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            case TIME:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            case URL:
                return (
                    setValues({
                        ...values,
                        [target.name]: target.value
                     })
                )
            default:
                return;
        }
    }
    return [values, handleInputChange, reset];
}

const TEXT = 'text'
const TEXTAREA = 'textarea'
const FILE = 'file'
const DATE = 'date'
const NUMBER = 'number'
const EMAIL = 'email'
const CHECKBOX = 'checkbox'
const PASSWORD = 'password'
const PHONE = 'tel'
const TIME = 'time'
const URL = 'url'
const SELECT = 'select-one'