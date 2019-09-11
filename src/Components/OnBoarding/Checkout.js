import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { checkout as styles, withStyles } from '../../MaterialUI/styles'
import { CssBaseline, AppBar, Toolbar, Paper, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core'

import AddressForm from './AddressForm'
import SchoolInfo from './SchoolInformation'
import Review from './ReviewForm'
import WorkExperience from './WorkExperince'

const steps = ['Address', 'Employment', 'School Information', 'Review your order']

const Checkout = props => {
  const [state, setState] = useState({ activeStep: 0 })

  handleNext = () => {
    setState({ activeStep: state.activeStep++ })
  }

  handleBack = () => {
    setState({ activeStep: state.activeStep-- })
  }

  handleReset = () => {
    setState({ activeStep: 0 })
  }

  const { classes } = props
  const { activeStep } = state

  return (

    <>

      <CssBaseline />

      <AppBar
        position="absolute"
        color="default"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
          >
            Lambda Resume Builder Onboarding
            </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>
        <Paper className={classes.paper}>

          <Typography
            component="h1"
            variant="h4"
            align="center"
          >
            Onboarding
            </Typography>

          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>

                <Typography variant="h5" gutterBottom>
                  Thank you, let's get started building the rest of your resume.
                  </Typography>

                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                  </Typography>

              </>

            ) : (

                <>

                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>

                </>

              )}

          </>

        </Paper>
      </main>
    </>

  )

  function getStepContent(step) {

    switch (step) {
      case 0:
        return <AddressForm />

      case 1:
        return <WorkExperience />

      case 2:
        return <SchoolInfo />

      case 3:
        return <Review />

      default:
        throw new Error('Unknown step')
    }

  }

}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Checkout)
