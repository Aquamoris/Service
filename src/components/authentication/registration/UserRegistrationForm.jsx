import React, {useState} from 'react';
import {useFormik} from "formik";

const UserRegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: (values, {resetForm}) => {
                console.log(values);
                resetForm()
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
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}/>
                <input
                    onChange={() => {
                        setShowPassword(!showPassword);
                    }}
                    type="checkbox"
                    value={showPassword}/>
            </div>
            <button type='submit'>Зарегистрироваться</button>
        </form>
    )
}

export default UserRegistrationForm;