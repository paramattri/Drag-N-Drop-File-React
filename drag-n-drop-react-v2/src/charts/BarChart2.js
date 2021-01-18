import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'

function BarChart2() {

    var chartData
    // const [ chartData, setChartData ] = useState({})
    var rgb = []
    var borderColor = []
    var backgroundColor = []

    const randomColorGenerate = (responseLength) => {
      for(let i = 0; i < 3; i++){
        rgb.push(Math.floor(Math.random() * 255))
      }
      for(let i = 0; i < responseLength; i++){
        borderColor.push('rgb('+rgb.join(',')+')')
        backgroundColor.push('rgb('+rgb.join(',')+')')
      }
      rgb = []
      console.log(borderColor)
      console.log(backgroundColor)
    }
    
    const dummyData = [
      {
        "category": "Motor Insurance",
        "partners": [
          {
            "partner": "Tata AIG",
            "count": 3
          },
          {
            "partner": "Bajaj Allianz",
            "count": 2
          },
          {
            "partner": "HDFC ERGO",
            "count": 2
          }
        ]
      },
      {
        "category": "Travel Insurance",
        "partners": [
          {
            "partner": "Tata AIG",
            "count": 4
          },
          {
            "partner": "HDFC ERGO",
            "count": 2
          }
        ]
      }
    ]

    const barChart = () => {
      return <Bar data={chartData} options={options}/>
    }

    const chart = (data, index) => {

      let partners = []
      let boughtCount = []

      console.log(data)
      randomColorGenerate(data.partners.length)
      console.log(data.category)
      for(let dataObj of data.partners){
        //console.log(dataObj)
        partners.push(dataObj.partner)
        boughtCount.push(dataObj.count)
      }
      chartData = {
        labels: partners,
        datasets: [
          {
            label: data.category,
            data: boughtCount,
            borderColor: borderColor,
            backgroundColor: backgroundColor
          }
        ]
      }
      console.log(partners)
      console.log(boughtCount)
      console.log(chartData)
      borderColor = []
      backgroundColor = []
      return barChart()
    }

    // const data = {
    //     labels: ['Motor Insurance', 'Travel Insurance', 'Health Insurance', 'Term Life Insurance', 'General Insurance'],
    //     datasets: [
    //       {
    //         label: 'TATA AIG',
    //         data: [3, 2, 0, 6, 0],
    //         borderColor: [
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(255, 206, 86, 0.2)'
    //         ],
    //         backgroundColor: [
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(255, 206, 86, 0.2)'
    //         ]
    //       },
    //       {
    //         label: 'Bajaj Allianz',
    //         data: [4, 0, 2, 0, 3],
    //         borderColor: [
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(54, 162, 235, 0.2)'
    //         ],
    //         backgroundColor: [
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(54, 162, 235, 0.2)'
    //         ]
    //       },
    //       {
    //         label: 'HDFC ERGO',
    //         data: [1, 0, 0, 0, 3],
    //         borderColor: [
    //           'rgba(102, 162, 235, 0.2)',
    //           'rgba(102, 162, 235, 0.2)',
    //           'rgba(102, 162, 235, 0.2)',
    //           'rgba(102, 162, 235, 0.2)',
    //           'rgba(102, 162, 235, 0.2)'
    //         ],
    //         backgroundColor: [
    //           'rgba(102, 162, 235, 0.2)',
    //           'rgba(102, 162, 235, 0.2)',
    //           'rgba(102, 162, 235, 0.2)',
    //           'rgba(102, 162, 235, 0.2)',
    //           'rgba(102, 162, 235, 0.2)'
    //         ]
    //       },
    //     ]
    //   }
    
      const options = {
        title: {
          display: true,
          text: 'Partners bought in each category'
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
        <div style={{width: "40%", margin: 'auto'}}>
          {/* <Bar data={data} options={options}/>
          {console.log("Final Chart Data-->", chartData)} */}
          {dummyData.map((data, index) => chart(data, index))}
        </div>
    )
}

export default BarChart2
