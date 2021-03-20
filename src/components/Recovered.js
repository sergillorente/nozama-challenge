import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    h3: {
        fontSize: "9vw"
    }
})


const Recovered = ({ value }) => {
    const classes = useStyles()
    return (
    <Typography className={classes.h3} variant="h3" align="center">{value}</Typography>
    )
}

export default Recovered
