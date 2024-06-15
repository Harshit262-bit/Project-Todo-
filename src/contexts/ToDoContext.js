/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { createContext } from "react";

// every time we have to import create context use context.
// stsrt woth createcontext assign into variable
// after that need to use that variable so assign into usecontext
// after that use provider for align all things into context
// serch about your project that how many functionality in your project
// you can pass here string , number, array, variable
// we just or only pass function, not any defination or any kind of functionality only pass function 



// in this context how many type of values and method that we define here 
// but what opration we do on base of that method that we never define here
// that we define at there individiual file of app jsx

export const TodoContext = createContext({
    todos:[
        {
            id : 1,
            todo : "Todo msg",
            completed : false,
        }, 
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggeleComplete : (id) => {},

})


// always use context need context we have to assign it.
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider