import React from 'react'

import Card from './Card'

const TRR = ({ icon, title }) => {
    return (
        <div>
            <img className src={icon} alt="TRR" />
            <h3>{title}</h3>
        </div>
    )
}

export default TRR
