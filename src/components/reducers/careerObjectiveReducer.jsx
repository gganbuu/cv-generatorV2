export const careerObjectiveInitialState = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non velit ut orci tristique euismod sit amet ut orci. Nulla id consequat turpis. Sed vestibulum purus ac odio tristique, et vulputate arcu condimentum. Fusce bibendum pulvinar sapien, a sagittis felis dictum id. Ut tempus metus turpis, auctor ullamcorper dolor tempus in. Nullam id velit orci. Nunc congue, dolor vitae semper imperdiet, leo nulla laoreet leo, sed efficitur massa velit vitae libero. Vivamus porttitor tortor lectus. Sed venenatis ut purus sit amet maximus. Ut tortor ante, vestibulum quis vulputate in, vulputate at ligula. Etiam tempor nunc nunc, ac efficitur ipsum blandit eu. Nullam at quam eu elit lacinia rhoncus. Aliquam efficitur urna sed ante posuere venenatis. Vivamus sit amet bibendum enim."

export function careerObjectiveReducer(state, action) {
    switch (action.type) {
        case 'changed-text': {
            return action.value;    
        }
        case 'cleared-all': {
            return "";
        }
        default: {
            throw Error(`Unknown action: ${action.type}]`)
        }
    }
}