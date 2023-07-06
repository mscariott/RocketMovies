import axios from "axios"

export const api = axios.create({
  baseURL: "http://localghost:3333"
})

