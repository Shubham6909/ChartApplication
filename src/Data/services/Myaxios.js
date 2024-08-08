import axios from "axios";
const Baseurl="http://localhost:8080/chart"
export const Myaxios=axios.create({
    baseURL:Baseurl
})