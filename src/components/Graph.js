import React from 'react'
import { Line } from 'react-chartjs-2'


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
            width: "100%",
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