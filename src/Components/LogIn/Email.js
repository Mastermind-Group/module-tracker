import React, { useState } from 'react'
import { useForm } from 'customhooks'

import { SignInButton, EmailForm } from './styles'

const Email = props => {

    const { fields, handleChanges, submit } = useForm(handleSubmit)

    const [focus, setFocus] = useState(false)
    const [focused, setFocused] = useState(false)

    function handleSubmit() {
        props.login(fields, props.history)
    }

    return (

        <form onSubmit={(e) => submit(e)}>

            <EmailForm required focused={focus}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type='email'
                    onChange={handleChanges}
                    onFocus={() => setFocus(true)}
                    onBlur={() => !fields.email && setFocus(false)}
                />
            </EmailForm>

            <EmailForm required focused={focused}>
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChanges}
                    onFocus={() => setFocused(true)}
                    onBlur={() => !fields.password && setFocused(false)}
                />
            </EmailForm>

            <SignInButton>Sign in Using E-mail</SignInButton>

        </form>

    )
}

export default Email
