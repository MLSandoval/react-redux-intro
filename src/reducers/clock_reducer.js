//usually object, can be array, string...any structure to store data
const DEFAULT_STATE = {
    time: new Date().toLocaleTimeString()
};

//takes 2 parameters, current state this reducer is responsible for, and the action
//when app starts, current state coming in will be undfined, need default value to cover it
function clockReducer(state = DEFAULT_STATE, action){ //action = {type: 'TICK'}
    switch(action.type){
        case 'TICK': 
            return {time: new Date().toLocaleTimeString()};
        default: 
            return state;
    };

}

export default clockReducer;