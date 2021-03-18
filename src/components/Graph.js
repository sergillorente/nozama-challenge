import React from 'react'
import { Line } from 'react-chartjs-2'

// for the gradient color, it is always this dark green color but at the bottom 
// is very whitish and to the top is gets greenish

const Graph = () => {
    return(
        <div>
           <Line
               data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderColor: 'rgba(73, 126, 48)'
                    }
                ]
               }} 
               height={400}
               width={600}
               options={{
                   maintainAspectRatio: false, 
                   scales: {
                     yAxes: [
                         {
                            ticks: {
                                beginAtZero: true
                            }
                         }
                     ]  
                   },
                   legend: {
                       display: false
                   }
               }}
           /> 
        </div>
    )
}

export default Graph