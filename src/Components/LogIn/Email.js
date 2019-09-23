import React from 'react'
import { FormControl, Input, InputLabel } from '@material-ui/core'
import { useForm } from 'customhooks'

import { SignInButton, EmailForm } from './styles'

const Email = props => {

    const { fields, handleChanges, submit } = useForm(handleSubmit)

    function handleSubmit() {
        props.login(fields, props.history)
    }

    return (

        <form onSubmit={(e) => submit(e)}>

            <EmailForm required>
                <InputLabel htmlFor="email" style={{ fontSize: 14, color: '#999' }}>Email</InputLabel>
                <input
                    id="email"
                    name="email"
                    type='email'
                    onChange={handleChanges}
                />
            </EmailForm>

            <EmailForm required>
                <InputLabel htmlFor="password" style={{ fontSize: 14, color: '#999' }}>Password</InputLabel>
                <input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChanges}
                    style={{ fontSize: 18 }}
                />
            </EmailForm>

            <SignInButton>Sign in Using E-mail</SignInButton>

        </form>

    )
}

export default Email
