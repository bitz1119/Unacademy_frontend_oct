export const ADD_TODO = "AddToDo";
export const REMOVE_TODO = "RemoveToDo";

let lastId = 0;
export default function reducer(state=[],action){
    switch (action.type) {
        case ADD_TODO:
            state = [...state,{
                id: lastId++,
                description : action.description
            }]
            return state;

        case REMOVE_TODO:
            state = state.filter((element)=>{
                return element.id != action.id;
            })
            return state;
            
        default:
            return state;
    }
}