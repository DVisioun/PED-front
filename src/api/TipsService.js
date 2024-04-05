import axios from "axios";

const BASE_URL = "http://localhost:3001/tips";

export class TipsService {
    static get() {
        return axios.get(`${BASE_URL}`);
    }

    static put(id, day) {
        const data = {
            "used" : 1,
            "day_used" : day
        }

        return axios.put(`${BASE_URL}/${id}`, data);
    }

    static getLastDay(){
        return axios.get(`${BASE_URL}/day`);
    }
}