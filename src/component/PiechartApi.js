import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto'
const PiechartApi=({chartdata})=>{
    
    const [userdata,setuserdata]=useState({
        labels:[],
        datasets:[{
            label:"Intensity",
            data:[],
            backgroundColor:[]
        }]
    })
    useEffect(()=>{
        const background=[]
        for(let i=0;i<chartdata.length;i++){
       const random=`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
            background.push(random)}
        setuserdata({
            labels:chartdata.map((data)=>data.endyear),
            datasets:[{
                label:"Intensity",
                data:chartdata.map((data)=>data.intensity),
                backgroundColor:background
            }]
        })
    
    },[chartdata])
    return <div >
        <Pie data={userdata}></Pie>
    </div>
}
export default PiechartApi;