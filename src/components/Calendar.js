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
        width: "7vw",
        height: "7vw",
        '@media (min-width: 46.875em)': {
            width: "3vw",
            height: "3vw",
        }
    },
    input: {
        fontSize: '4vw',
        '@media (min-width: 46.875em)': {
            fontSize: '1.5vw'
        }
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
                keyboardIcon={<Avatar className={classes.icon} variant="square" src={'/images/calendar.png'}></Avatar>}
                variant="inline"
                inputVariant="outlined"
                format="EEEE dd, MMMM, yyyy"
                minDate={new Date('01/01/2020')}
                maxDate={new Date('06/30/2020')}
                value={value}
                onChange={onChange}
                InputProps={{ className: classes.input }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default Calendar
