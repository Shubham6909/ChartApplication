import { useContext } from "react";
import BarchartApi from "./BarchartApi";
import LinechartApi from "./LinechartApi";
import PiechartApi from "./PiechartApi";
import { ChartDataContext, ShowChartDataContext } from "../App";
import '../../src/CSS/Allpage.css'

const Allpage=()=>{
  const  chartdata= useContext(ChartDataContext)
   const showchartdata = useContext(ShowChartDataContext)
    return(<>
<div className="Maindiv">
<div className="Firstdiv" >
   <div id="Linechart">
    <LinechartApi showchartdata={showchartdata}></LinechartApi>
    </div>
<div id="Barchart">
    <BarchartApi showchartdata={showchartdata}></BarchartApi>
    </div>
    </div>
    <div className="Seconddiv">
   <div id="Piechart">
    <PiechartApi chartdata={chartdata}></PiechartApi>
    </div>
    </div>
</div>
    </>)
}
export default Allpage;