import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    unit: {
        fontWeight: "300",
        marginLeft: "0.1em",
        fontSize: "6vw"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline"
    },
    h3: {
        fontSize: "9vw"
    }
})

const TRR = ({ value }) => {
    const classes = useStyles()

    return (
    <div className={classes.container}>
        <Typography className={classes.h3} variant="h3" align="center">{value}</Typography>
        <Typography className={classes.unit} variant="h4" align="center">Kg.</Typography>
    </div>
    )
}

export default TRR
