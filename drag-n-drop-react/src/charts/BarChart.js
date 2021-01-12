import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {

    const data = {
        labels: ["Motor Insurance", "Travel Insurance", "Health Insurance", "Term Life Insurance"],
        datasets: [
            {
                label: "Partners for Categories",
                data: [2,2,2,3],
                borderColor: ['rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 0.2)']
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: "Bar Chart"
        },
        scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 6,
                  stepSize: 1
                }
              }
            ]
          }
    }

    return (
        <div style={{width: "80%", margin: 'auto'}}>
            <Bar data={data} options={options}/>
        </div>
    )
}

export default BarChart
