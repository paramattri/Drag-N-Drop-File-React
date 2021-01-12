import React from 'react'
import BarChart from './charts/BarChart'
import DoughnutChart1 from './charts/DoughnutChart1'

function Analytics() {
    return (
        <div>
            <BarChart/>
            <div className="doughnutCharts" style={{display: 'flex'}}>
                <DoughnutChart1/>
            </div>
        </div>
    )
}

export default Analytics
