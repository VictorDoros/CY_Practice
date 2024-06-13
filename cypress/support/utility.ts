

//utility.ts
export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://thinking-tester-contact-list.herokuapp.com" //return desired url
        else if (envi == 'staging')
            return "https://thinking-tester-contact-list-staging.herokuapp.com"
        else if (envi == 'qa')
            return "https://thinking-tester-contact-list-qa.herokuapp.com"
    }

    randomStatus() {
        const statuses = ["active", "inactive"]
        return statuses[Math.floor(Math.random() * 2)]
    }

    randomGender(){
        const gender = ["male", "female"]
        return gender[Math.floor(Math.random() * 2)]
    }
}