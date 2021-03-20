import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'

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
        padding: '0 30px',
    },
    h2: {
        textTransform: 'uppercase',
        color: "grey",
        fontSize: "6vw"
    }
})

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTRR, setSelectedTRR] = useState('')
    const [recovered, setRecovered] = useState('')

    const classes = useStyles()

    useEffect(() => {
        // transform data for graph[] 
    })

    useEffect(() => {
        // update values [date] 
    })

    return (
        <div>
            <div className="header">
                <img className="dashboard__logo" src="/images/nozama_logo.png" alt="logo" />
                <Typography className={classes.h2} align="center" variant="h2">Challenge</Typography>
            </div>
            <div>
            {/* <Card icon={'/images/calendar.png'}>
                <Calendar  />
            </Card>
            <Card icon={'/images/recycling.png'} title={'Recovered'}>
                <Recovered />
            </Card>
            <Card icon={'/images/trr.png'} title={'T.R.R'}>
                <TRR />
            </Card> */}
            </div>
            <Card title="Recovered" icon={'/images/recycling.png'}>
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
