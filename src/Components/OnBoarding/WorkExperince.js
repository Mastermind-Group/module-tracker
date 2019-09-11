import React from 'react'
import { Grid, Typography, TextField } from '@material-ui/core'

const WorkForm = props => {

  return (

    <>

      <Typography variant="h6" gutterBottom>
        Employment
      </Typography>

      <Grid container spacing={24}>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="employer"
            name="employer"
            label="Employer"
            fullWidth
            autoComplete="employer"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="position"
            name="position"
            label="Position"
            fullWidth
            autoComplete="position"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>

      </Grid>

    </>

  )

}

export default WorkForm
