import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent'

import Endorsement from '../../EndorsementChecklist'
import { MainListItems, SecondaryListItems, Top } from '../ListItems'
import Calendar from '../../Calendar'
import Feedback from '../../Feedback'
import { Content, Drawer } from '../styles'
import { colors } from '../../GlobalStyles'

const AdminDashboard = props => {

    const [open, setOpen] = useState(true)

    const handleDrawer = () => setOpen(!open)

    useEffect(() => { open && setTimeout(() => { handleDrawer() }, 10000) }, [open])

    return <>

        <Top
            open={open}
            handleDrawer={handleDrawer}
        />

        <Drawer open={open}>

            <MainListItems open={open} />

            <hr style={{
                color: colors.accent,
                backgroundColor: colors.accent,
                height: 2,
                width: '120%',
                marginLeft: -10,
            }} />

            <SecondaryListItems
                open={open}
                admin={props.admin}
                history={props.history}
            />

        </Drawer>

        <Content>
            <Switch>
                <Route path='/admin/dashboard/calendar' component={Calendar} />
                <Route path='/admin/dashboard/endorsement' component={Endorsement} />
                <Route path='/dashboard/feedback' component={Feedback} />
            </Switch>

            <CookieConsent
                location="bottom"
                enableDeclineButton={true}
                // debug={true}
                declineButtonText="I decline"
                buttonText="I understand"
                cookieName="cookieConsent"
                style={{ background: colors.sbg, marginBottom: '15px' }}
                buttonStyle={{ color: colors.sbg, fontSize: '13px', background: 'white' }}
                expires={150}
            >This website uses cookies to enhance the user experience. <span style={{ fontSize: '10px' }} />
            </CookieConsent>

        </Content>

    </>

}

export default AdminDashboard
