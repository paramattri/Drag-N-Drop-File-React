import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart2() {

    const data = {
        labels: ["Motor Insurance", "Travel Insurance", "Health Insurance", "Term Life Insurance"],
        datasets: [
            {
              label: 'Insurances Bought',
              data: [5, 10, 15, 12],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
              ]
            }
          ]
    }

    const options = {
        title: {
          display: true,
          text: 'Doughnut Chart'
        }
      }

    return (
        <div style={{width: "40%"}}>
            <Doughnut data={data} options={options}/>
        </div>
    )
}

export default DoughnutChart2
