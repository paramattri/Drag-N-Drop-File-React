import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart1() {

    const data = {
        labels: ["Tata AIG", "Bajaj Allianz", "HDFC ERGO", "HDFC Life"],
        datasets: [
            {
              label: 'Partners',
              data: [3, 3, 1, 1],
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

export default DoughnutChart1
