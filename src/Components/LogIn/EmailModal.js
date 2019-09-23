import React from 'react'
import { FormControl, Input, InputLabel } from '@material-ui/core'
import { useForm } from 'customhooks'

import { SignInButton } from './styles'

const EmailModal = props => {

    const { fields, handleChanges, submit } = useForm(handleSubmit)

    function handleSubmit() {
        props.login(fields, props.history)
    }

    return (

        <form onSubmit={(e) => submit(e)}>

            <FormControl
                margin="normal"
                required
                fullWidth
            >
                <InputLabel htmlFor="email" style={{ fontSize: 14, color: '#999' }}>Email</InputLabel>
                <Input
                    id="email"
                    name="email"
                    type='email'
                    autoComplete="email"
                    onChange={handleChanges}
                    autoFocus
                    style={{ fontSize: 16 }}
                />
            </FormControl>

            <FormControl
                margin="normal"
                required
                fullWidth
            >
                <InputLabel htmlFor="password" style={{ fontSize: 14, color: '#999' }}>Password</InputLabel>
                <Input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChanges}
                    style={{ fontSize: 18 }}
                />
            </FormControl>

            <SignInButton>Sign in Using E-mail</SignInButton>

        </form>

    )
}

export default EmailModal
