import React, { useState, useEffect } from 'react'

import data from '../lib/data.json'

import './Dashboard.css'
import Graph from './../components/Graph'

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const [TRR, setTRR] = useState('')
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
            <Graph
                data={data}
                labels={data.map(value => value.x)}
                units='kg.'
            />
        </div>
    )
}

export default Dashboard;
