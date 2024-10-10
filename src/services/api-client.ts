import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: 'de389e6855094d10ba473c1e8f5f0847'
    }
})