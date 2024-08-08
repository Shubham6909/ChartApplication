import { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
const LinechartApi=({showchartdata})=>{
    
    return <div>
        <Line data={showchartdata}/>
    </div>
}
export default LinechartApi;