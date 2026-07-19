export const educationInitialState = {degree: 'Bachelor of Example',
                                      timeStart: '2022-02-01',
                                      timeEnd: '2026-02-01',
                                      university: 'Example University'}

export function educationReducer(state, action) {
    switch (action.type) {
        case 'changed-degree': {
            return {...state,
                    degree: action.value
            }
        }
        case 'changed-time-start': {
            return {...state,
                    timeStart: action.value
            }
        }
        case 'changed-time-end': {
            return {...state,
                    timeEnd: action.value
            }
        }
        case 'changed-university': {
            return {...state,
                university: action.value
            }
        }

        case 'cleared-all': {
            const emptyDetails = {...state}
            Object.keys(emptyDetails).forEach(key => emptyDetails[key] = "");
            return emptyDetails
        }

        default: {
            throw Error(`Unknown action: ${action.type}]`)
        }
    }
}