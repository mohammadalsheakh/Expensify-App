import { createStore } from "redux";

// reducers :
//1 is a pure function : that means that the function dont take any variable from outside the function not included in the arguments
//here out variables is action and the state and we dont have any other (output depend on the input)

//2  never change the state and action : that is mean change the inside but not the whole state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.incrementBy }
        case "DECREMENT":
            return { count: state.count - action.decrementBy }
        case "RESET":
            return { count: 0 }
        case "set":
            return { count: action.value }
        default:
            return { count: state.count }
    }

}

const store = createStore(countReducer);

const unsubscribe =  store.subscribe(() =>{
    console.log(store.getState());

});

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: `INCREMENT`,
    incrementBy : typeof(incrementBy) === "number" ? incrementBy :incrementBy = 1
})

const decremantCount = ({decrementby = 1}= {}) =>({
    type: "DECREMENT",
    decrementBy: typeof (decrementby) === "number" ? decrementby : decrementby = 1
})

const resetCount = () => ({
    type : "RESET"
})
const setCount = ({value} ) =>({
    type : "set",
    value 
})


store.dispatch(incrementCount({incrementBy : 5}))

store.dispatch(incrementCount())

store.dispatch(incrementCount())

store.dispatch(setCount({value : 150}))
store.dispatch(resetCount())
store.dispatch(decremantCount({decrementby : 4}))
store.dispatch(decremantCount({decrementby : 6}))

