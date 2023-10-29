import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true
})

export const vacancyAPI = {
    getVacancies() {
        return instance
            .get('vacancies')
            .then(response => response.data)
    },

    getVacancy(vacancyId) {
        return instance
            .get('vacancies/' + vacancyId)
            .then(response => response.data)
    }
}
export const companyAPI = {
    getCompanies() {
        return instance
            .get('companies')
            .then(response => response.data)
    },

    getCompany(companyId) {
        return instance
            .get('companies/' + companyId)
            .then(response => response.data)
    }
}
export const companyAuthAPI = {  }
export const employeeAuthAPI = {  }
export const employeeWithTagAPI = {
    getEmployeeTags(employeeId) {
        return instance
            .get('employee-tags/' + employeeId)
            .then(response => response.data)
    }
}
export const employeeAPI = {
    getEmployees() {
        return instance
            .get('employees')
            .then(response => response.data)
    },

    getEmployee(employeeId) {
        return instance
            .get('employees/' + employeeId)
            .then(response => response.data)
    }
}

export const companyFavoritesAPI = {
    getCompanyFavorites(companyId) {
        return instance
            .get('favorites-company/' + companyId)
            .then(response => response.data)
    }
}
export const employeeFavoritesAPI = {
    getEmployeeFavorites(employeeId) {
        return instance
            .get('favorites-employee/' + employeeId)
            .then(response => response.data)
    }
}
export const jobInvitesAPI = {
    getJobInvites(employeeId) {
        return instance
            .get('job-invites/' + employeeId)
            .then(response => response.data)
    }
}
export const resumeAPI = {
    getResumes() {
        return instance
            .get('resumes')
            .then(response => response.data)
    },

    getEmployeeResumes(employeeId) {
        return instance
            .get('resumes/' + employeeId)
            .then(response => response.data)
    }
}
export const defaultAPI = {
    default() {
        return instance
            .get('')
            .then(response => response.data)
    },
}