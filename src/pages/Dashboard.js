import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import './Dashboard.scss'
import Calendar from './../components/Calendar'
import TRR from './../components/TRR'
import Recovered from './../components/Recovered'
import Graph from './../components/Graph'
import Card from './../components/Card'
import data from '../lib/data.json'


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #333, #999)',
        border: 0,
        borderRadius: 15,
        color: 'red',
        padding: '0 30px'
    },
    h2: {
        textTransform: 'uppercase',
        color: "grey",
        fontSize: "9vw",
        letterSpacing: "0.1em",
        '@media (min-width: 46.875em)' : {
            fontSize: '4vw',
            marginTop: '2%'
        }
    }
})

const Dashboard = () => {
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const [selectedDate, setSelectedDate] = useState(new Date('01/01/2020'))
    const [TRRValue, setTRRValue] = useState(randomNumber(300, 1000))
    const [recoveredValue, setRecoveredValue] = useState(randomNumber(300, 600))

    const classes = useStyles()


    const handleChange = (value) => {
        setSelectedDate(value)
        setTRRValue(randomNumber(300, 1000))
        setRecoveredValue(randomNumber(300, 600))
    }

    return (
        <div>
            <div className="header">
                <img className="dashboard__logo" src="/images/nozama_logo.png" alt="logo" />
                <Typography className={classes.h2} align="center" variant="h2">Challenge</Typography>
            </div>
            <div className="middle-cards">
                <Calendar value={selectedDate} onChange={handleChange}/>
                <Card icon={'/images/trr.png'} title={'T.R.R'}>
                    <TRR value={TRRValue} />
                </Card>
                <Card icon={'/images/recycling.png'} title={'Recovered'}>
                    <Recovered value={recoveredValue} />
                </Card>
            </div>
            <Card icon={'/images/recycling.png'} title={"Recovered"}>
                <Graph
                    data={data}
                    labels={data.map(value => value.x)}
                    units='kg.'
                />
            </Card>
        </div>
    )
}

export default Dashboard;
