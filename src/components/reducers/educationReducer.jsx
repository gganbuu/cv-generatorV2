const createEducationShape = () => {return {id: crypto.randomUUID(), 
                        details: {
                                degree: 'Bachelor of Example',
                                timeStart: '2022-02-01',
                                timeEnd: '2026-02-01',
                                university: 'Example University',
                                achievements: [{
                                                id: crypto.randomUUID(),
                                                description: 'achievement 1'
                                                },
                                                {
                                                id: crypto.randomUUID(),
                                                description: 'achievement 2'
                                                }
                                            ]  
                                }
                        }}

const createEmptyEducationShape = () => {return {id: crypto.randomUUID(), 
                        details: {
                                degree: '',
                                timeStart: '',
                                timeEnd: '',
                                university: '',
                                achievements: []  
                                }
                        }}


export const educationInitialState = [createEducationShape()];

export function educationReducer(state, action) {
    switch (action.type) {
        case 'changed-degree': {
            const allEducations = [...state]
            allEducations
                        .map(item => {if (item.id == action.id) {
                            item.details = {...item.details, degree: action.value}
                        }})
            console.log(allEducations)
            return allEducations
        }
        case 'changed-time-start': {
            const allEducations = [...state]
            allEducations
                        .map(item => {if (item.id == action.id) {
                            item.details = {...item.details, timeStart: action.value}
                        }})
            return allEducations
        }
        case 'changed-time-end': {
            const allEducations = [...state]
            allEducations
                        .map(item => {if (item.id == action.id) {
                            item.details = {...item.details, timeEnd: action.value}
                        }})
            return allEducations
        }
        case 'changed-university': {
            const allEducations = [...state]
            allEducations
                        .map(item => {if (item.id == action.id) {
                            item.details = {...item.details, university: action.value}
                        }})
            return allEducations
        }

        case 'added-block': {
            return [
                ...state,
                createEducationShape()
            ]
        }
        case 'deleted-block': {
            const editedEducation = [...state.filter(block => block.id != action.id)]
            return editedEducation
        }

        case 'edited-achievement': {
            return state.map(education => {
                if (education.id !== action.educationId) return education
                return {
                    ...education,
                    details: {
                        ...education.details,
                        achievements: education.details.achievements.map(achievement =>
                            achievement.id === action.achievementId
                                ? { ...achievement, description: action.value }
                                : achievement
                        )
                    }
                }
            })
        }

        case 'added-achievement': {
            return state.map(education => {
                if (education.id !== action.educationId) return education
                return {
                    ...education,
                    details: {
                        ...education.details,
                        achievements: [...education.details.achievements,
                            {id: crypto.randomUUID(), description: 'achievement 1'}]
                        }
                    }
                }
            )
        }

        case 'deleted-achievement': {
            return state.map(education => {
                if (education.id !== action.educationId) return education
                return {
                    ...education,
                    details: {
                        ...education.details,
                        achievements: education.details.achievements.filter(achievement =>
                            achievement.id !== action.achievementId)
                        }
                    }
                }
            )
        }

        case 'fill-with-sample': {
            return [createEducationShape()];
        }

        case 'cleared-all': {
            return [createEmptyEducationShape()]
        }

        default: {
            throw Error(`Unknown action: ${action.type}]`)
        }
    }
}