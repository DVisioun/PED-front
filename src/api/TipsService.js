import axios from 'axios'

const BASE_URL = 'https://ped-backend.vercel.app/tips'

export class TipsService {
  static get() {
    return axios.get(`${BASE_URL}`)
  }

  static getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
  }

  static getByFilter(language, level) {
    const data = {
      language_id: language,
      level_id: level
    }

    return axios.post("https://ped-backend.vercel.app/filter", data)
  }

  static put(id, day) {
    const data = {
      used: 1,
      day_used: day,
    }

    return axios.put(`${BASE_URL}/${id}`, data)
  }

  static getLastDay() {
    return axios.get(`https://ped-backend.vercel.app/day`)
  }
}
