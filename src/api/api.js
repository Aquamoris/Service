import axios from "axios";


const instanse = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

export const vacancyAPI = {  }
export const companyAPI = {  }
export const companyAuthAPI = {  }
export const employeeAuthAPI = {  }
export const employeeWithTagAPI = {  }
export const employeeAPI = {  }
export const jobInvitesAPI = {  }
export const resumeAPI = {  }
export const defaultAPI = {  }