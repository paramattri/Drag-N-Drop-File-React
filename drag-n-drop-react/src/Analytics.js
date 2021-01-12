import React from 'react'
import BarChart from './charts/BarChart'
import DoughnutChart1 from './charts/DoughnutChart1'
import DoughnutChart2 from './charts/DoughnutChart2'

function Analytics() {
    return (
        <div>
            <BarChart/>
            <div className="doughnutCharts" style={{display: 'flex', justifyContent: 'center', marginTop: "30px"}}>
                <DoughnutChart1/>
                <DoughnutChart2/>
            </div>
        </div>
    )
}

export default Analytics
