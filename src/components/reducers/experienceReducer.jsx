const createExperienceShape = () => {return {id: crypto.randomUUID(),
                        details: {
                                role: 'Example Role',
                                timeStart: '2022-02-01',
                                timeEnd: '2026-02-01',
                                location: 'Example Location',
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

const createEmptyExperienceShape = () => {return {id: crypto.randomUUID(),
                                            details: {
                                                    role: '',
                                                    timeStart: '',
                                                    timeEnd: '',
                                                    location: '',
                                                    achievements: []
                                                    }
}}



export const experienceInitialState = [createExperienceShape()];

export function experienceReducer(state, action) {
    switch (action.type) {
        case 'changed-role': {
            return state.map(item => item.id === action.id
                ? {...item, details: {...item.details, role: action.value}}
                : item)
        }
        case 'changed-time-start': {
            return state.map(item => item.id === action.id
                ? {...item, details: {...item.details, timeStart: action.value}}
                : item)
        }
        case 'changed-time-end': {
            return state.map(item => item.id === action.id
                ? {...item, details: {...item.details, timeEnd: action.value}}
                : item)
        }
        case 'changed-location': {
            return state.map(item => item.id === action.id
                ? {...item, details: {...item.details, location: action.value}}
                : item)
        }

        case 'added-block': {
            return [
                ...state,
                createExperienceShape()
            ]
        }
        case 'deleted-block': {
            return state.filter(block => block.id !== action.id)
        }

        case 'edited-achievement': {
            return state.map(item => item.id === action.experienceId
                ? {...item, details: {...item.details, achievements: item.details.achievements.map(achievement =>
                    achievement.id === action.achievementId
                        ? {...achievement, description: action.value}
                        : achievement)}}
                : item)
        }
        case 'deleted-achievement': {
            return state.map(experience => {
                if (experience.id !== action.experienceId) return experience
                return {
                    ...experience,
                    details: {
                        ...experience.details,
                        achievements: experience.details.achievements.filter(achievement =>
                            achievement.id !== action.achievementId)
                        }
                    }
                }
            )
        }

        case 'added-achievement': {
            return state.map(experience => {
                if (experience.id !== action.experienceId) return experience
                return {
                    ...experience,
                    details: {
                        ...experience.details,
                        achievements: [...experience.details.achievements,
                            {id: crypto.randomUUID(), description: 'achievement 1'}]
                        }
                    }
                }
            )
        }

        case 'fill-with-sample': {
            return [createExperienceShape()]
        }
        
        case 'cleared-all': {
            return [createEmptyExperienceShape()]
        }

        default: {
            throw Error(`Unknown action: ${action.type}]`)
        }
    }
}
