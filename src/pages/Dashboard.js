import React, { useState, useEffect } from 'react'

import './Dashboard.css'

const Dashboard = () => {

    const [ date, setDate ] = useState('')
    const [ TRR, setTRR ] = useState('')
    const [ recovered, setRecovered ] = useState('')
    const [ graphData, setGraphData ] = useState('')

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
        </div>
    )
}

export default Dashboard;