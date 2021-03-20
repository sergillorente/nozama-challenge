import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'; // it is used for the images
import { Avatar, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems:"center",
        paddingBottom: "1.5em"
    },
    root: {
        padding: "1.5em"
    },
    icon: {
        marginRight: '0.5em',
        width: "8%",
        height: "8%"
    },
    h5: {
        fontSize: "4vw"
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
                <Avatar className={classes.icon} src={icon} />
                <Typography className={classes.h5} variant="h5">{title}</Typography>
            </div>
            {children}
        </Paper>
    );
}

export default Card