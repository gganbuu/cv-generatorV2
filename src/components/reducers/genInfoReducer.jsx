export const genInfoInitialState = {
                                name: "John Smith", 
                                phone: "04123456789", 
                                email: "john.smith@gmail.com",
                                linkedIn: "https://www.linkedin.com/in/john-smith/",
                                gitHub: "https://github.com/johnsmith/"
                            }

export function genInfoReducer(state, action) {
    switch (action.type) {
        case 'changed-name': {
            return {...state, name: action.value}
        }
        case 'changed-phone': {
            return {...state, phone: action.value}
        }
        case 'changed-email': {
            return {...state, email: action.value}
        }
        case 'changed-linkedIn': {
            return {...state, linkedIn: action.value}
        }
        case 'changed-gitHub': {
            return {...state, gitHub: action.value}
        }
        case 'cleared-all': {
            const emptyDetails = {...state}
            Object.keys(emptyDetails).forEach(key => emptyDetails[key] = "");
            return emptyDetails
        }
        case 'fill-with-sample': {
            return genInfoInitialState
        }
        
        default: {
            throw Error(`Unknown action: ${action.type}]`)
        }
    }
}