import Axios from 'axios';

export default Axios.create({
    baseURL: "http://localhost:5000"
});