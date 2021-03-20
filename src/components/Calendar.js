import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    calendar: {
        width: "100%",
        paddingBottom: "1.5em"
    },
    icon: {
        width: "8%",
        height: "8%"
    },
    input: {
        fontSize: '3vw'
    }
})

const Calendar = ({ value, onChange }) => {
    const classes = useStyles()

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={classes.calendar}
                autoOk
                disableToolbar
                InputAdornmentProps={{ position: "start" }}
                keyboardIcon={<Avatar variant="square" src={'/images/calendar.png'}></Avatar>}
                variant="inline"
                inputVariant="outlined"
                format="EEEE dd, MMMM, yyyy"
                margin="normal"
                // minDate={new Date('01/01/2020')}
                // maxDate={new Date('30/06/2020')}
                value={value}
                onChange={onChange}
                InputProps={{ className: classes.input }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default Calendar
