import React, { useState, useEffect } from 'react'

import data from '../lib/data.json'

import './Dashboard.css'
import Calendar from './../components/Calendar'
import TRR from './../components/TRR'
import Recovered from './../components/Recovered'
import Graph from './../components/Graph'
import Card from './../components/Card'

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTRR, setSelectedTRR] = useState('')
    const [recovered, setRecovered] = useState('')

    useEffect(() => {
        // transform data for graph[] 
    })

    useEffect(() => {
        // update values [date] 
    })

    return (
        <div>
            <img className="dashboard__logo" src="/images/nozama_logo.png" alt="logo" />
            <h1 className="dashboard__title">Challenge</h1>
            {/* <Card />
            <Calendar icon={'/images/calendar.png'} />
            <Recovered 
                icon={'/images/recycling.png'}
                title={'Recovered'} 
            /> */}
            <TRR 
                icon={'/images/trr.png'} 
                title={'T.R.R'} 
            />
            <Graph
                data={data}
                labels={data.map(value => value.x)}
                units='kg.'
            />
        </div>
    )
}

export default Dashboard;
