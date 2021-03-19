import React from 'react'

import './Components.css'
import Card from './Card'

const TRR = ({ icon, title }) => {
    return (
        <div className="small-card">
            <img className="small__icon" src={icon} alt="TRR" />
            <h3>{title}</h3>
        </div>
    )
}

export default TRR
