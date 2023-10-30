import React, {useEffect} from 'react';
import {useFormik} from "formik";

const UserRegistrationForm = (props) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            showPassword: false
        },
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='username'>Псевдоним</label>
                <input
                    type='text'
                    name='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}/>
            </div>
            <div>
                <label htmlFor='email'>Почта</label>
                <input
                    type='email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}/>
            </div>
            <div>
                <label htmlFor='password'>Пароль</label>
                <input
                    type={formik.values.showPassword ? 'text' : 'password'}
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}/>
                <input
                    onChange={() => {
                        formik.values.showPassword = !formik.values.showPassword;
                    }}
                    type="checkbox"/>
            </div>
            <button type='submit'>Зарегистрироваться</button>
        </form>
    )
}

export default UserRegistrationForm;