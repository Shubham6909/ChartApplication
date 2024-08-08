import { useNavigate } from 'react-router-dom';
const Home=()=>{
   const navigat= useNavigate();
    return (<>
    <h1><button onClick={()=>navigat("/all")}>Show Analysis</button> </h1></>)
}
export default Home;