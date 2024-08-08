
import React, { useEffect, useState } from 'react';
import './App.css';
// import Barchart from './component/Barchart';
// import { datas } from './Data/Data';
// import Linechart from './component/Linechart';
// import Piechart from './component/Piechart';


import DataFetching from './Data/DataFetching';
import BarchartApi from './component/BarchartApi';
import LinechartApi from './component/LinechartApi';
import PiechartApi from './component/PiechartApi';
import {  Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Allpage from './component/Allpage';

export const ChartDataContext=React.createContext();
export const ShowChartDataContext=React.createContext();
function App() {
  // const [userdata,setuserdata]=useState({
  //   labels:datas.map((data)=>data.year),
  //   datasets:[{
  //     label:"User Gained",
  //     data:datas.map((data)=>data.userGain)
  //   }]
  // });
  
  const [chartdata,setchartdata]=useState([])
  const setdatatoapp=(data)=>{
    setchartdata(data);
  }
  const [showchartdata,setshowchartdata]=useState({
    labels : [],
    datasets:[{
      label:"Intensity of user",
      data: [],
      backgroundColor:[]
    }]
  });
 useEffect(()=>{
  const background=[]
        for(let i=0;i<chartdata.length;i++){
       const random=`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
            background.push(random)}
setshowchartdata({
  labels : chartdata.map((data)=>data.endyear),
  datasets:[{
    label:"Intensity of user",
    data: chartdata.map((data)=>data.intensity),
    backgroundColor:background
  }],
 
});
 },[chartdata])

  return (
    <div className="App">
     <DataFetching setdatatoapp={setdatatoapp}></DataFetching>
     <ChartDataContext.Provider value={chartdata}>
      <ShowChartDataContext.Provider value={showchartdata}>
     <Routes>
     
     {/* <Barchart userdata={userdata}></Barchart>
     <Linechart userdata={userdata}></Linechart>
     <Piechart userdata={userdata}></Piechart> */}
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/barchart' element={ <BarchartApi showchartdata={showchartdata}></BarchartApi>}></Route>
    
     <Route path='/linechart' element={<LinechartApi showchartdata={showchartdata}></LinechartApi>}></Route>
      <Route path='/peichart' element={<PiechartApi chartdata={chartdata}></PiechartApi> }></Route>
     
      <Route path='/all' element={<Allpage ></Allpage>}></Route>
      
    
     
      </Routes>
      </ShowChartDataContext.Provider>
     </ChartDataContext.Provider>
    </div>
  );
}

export default App;
