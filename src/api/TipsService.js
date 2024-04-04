import axios from "axios";

const BASE_URL = "http://localhost:3001/tips";

export class TipsService {
    static get() {
        return axios.get(`${BASE_URL}`);
    }
}