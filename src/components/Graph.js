import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

import data from './../lib/data.json'

// for the gradient color, it is always this dark green color but at the bottom 
// is very whitish and to the top is gets greenish
defaults.global.tooltips.enabled = false


const Graph = ({ labels, data, units }) => {

    const chartData = (canvas) => {
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(0, 0, 0, 250)
        gradient.addColorStop(0, 'rgba(100,124,100,1)')
        gradient.addColorStop(1, 'rgba(100,124,100,0)')

        return {
            labels,
            datasets: [
                {
                    data,
                    label: 'Recovered',
                    borderColor: 'rgba(100,124,100,1)',
                    borderWidth: 1,
                    pointRadius: 7,
                    pointBackgroundColor: 'white',
                    backgroundColor: gradient
                }
            ]
        }
    }

    return <Line
        data={chartData}
        options={{
            // maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            callback: function (value) { return `${value}${units}` }
                        }
                    }
                ]
            },
            legend: {
                display: false
            }
        }}
    />
}

export default Graph