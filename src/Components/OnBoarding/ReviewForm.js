import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, reviewForm as styles } from '../../MaterialUI/styles'
import { Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core'

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
]
const addresses = []
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
]

const Review = props => {

  const { classes } = props

  return (

    <>

      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      <List disablePadding>

        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>

      </List>

      <Grid container spacing={16}>

        <Grid item xs={12} sm={6}>

          <Typography
            variant="h6"
            gutterBottom
            className={classes.title}
          >
            Shipping
          </Typography>

          <Typography gutterBottom>John Smith</Typography>

          <Typography gutterBottom>{addresses.join(', ')}</Typography>

        </Grid>

        <Grid
          item
          container
          direction="column"
          xs={12}
          sm={6}
        >
          <Typography
            variant="h6"
            gutterBottom
            className={classes.title}
          >
            Payment details
          </Typography>

          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

        </Grid>

      </Grid>

    </>
  )
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Review)
