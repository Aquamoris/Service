import React, {useState} from 'react';
import {useFormik} from "formik";

const CompanyLoginForm = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, {resetForm}) => {
            props.checkCompany(values.email, values.password);
            if (props.currentCompany) {
                props.changeUser('company', props.currentCompany);
                resetForm();
            } else {
                alert('Данная компания не существует');
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='email'>Почта</label>
                <input
                    type='email'
                    name='email'
                    autoFocus={true}
                    onChange={formik.handleChange}
                    value={formik.values.email}/>
            </div>
            <div>
                <label htmlFor='password'>Пароль</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}/>
                <input
                    onChange={() => {
                        setShowPassword(!showPassword)
                    }}
                    type='checkbox'
                    value={showPassword}/>
            </div>
            <button type='submit'>Войти</button>
        </form>
    )
}

export default CompanyLoginForm;