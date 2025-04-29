import React from 'react'
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts'

const CustomLineChart = () => {

    const CustomTooltip = ({ active, payload }) => {
        if(active && payload && payload.length) {
            return (
                <div className=''>
                    <p className=''>{payload[0].payload.category}</p>
                    <p className=''>Amount: <span className=''>${payload[0].payload.amount}</span></p>
                </div>
            );
        }
        return null;
    };
  return (
    <div>
      
    </div>
  )
}

export default CustomLineChart
