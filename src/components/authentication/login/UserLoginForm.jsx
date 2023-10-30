import React, {useState} from 'react';
import {useFormik} from "formik";

const UserLoginForm = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, {resetForm}) => {
            props.checkUser(values.email, values.password);
            if (props.currentUser) {
                props.changeUser('employee', props.currentUser);
                resetForm();
            } else {
                alert('Данный пользователь не существует');
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

export default UserLoginForm;