import React from 'react';

const User = (props) => {
    let users = props.users;
    const onSubmitForm = () => {
        
    }

    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor='username'>Name</label>
                <input type='text' name='username'/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email'/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password'/>
            </div>
            <button>Submit form</button>
        </form>
    )
}

export default User;