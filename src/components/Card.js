import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems:"center",
        paddingBottom: "1.5em"
    },
    root: {
        padding: "1.5em",
        marginBottom: "1.5em"
    },
    icon: {
        marginRight: '0.5em',
        width: "9vw",
        height: "9vw",
        '@media (min-width: 46.875em)': {
            width: "3vw",
            height: "3vw"
        }
    },
    h5: {
        fontSize: "4vw",
        '@media (min-width: 46.875em)': {
            fontSize: "1.5vw"
        }
    }
})

const Card = ({ children, icon, title }) => {
    const classes = useStyles();

    return (
        <Paper
            className={classes.root}
            elevation={5}
        >
            <div className={classes.container}>
                <Avatar className={classes.icon} variant="square"src={icon} />
                <Typography className={classes.h5} variant="h5">{title}</Typography>
            </div>
            {children}
        </Paper>
    );
}

export default Card