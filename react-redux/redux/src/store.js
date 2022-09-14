import {createStore} from "redux";


// createStore 의 인자 : reducer() 함수
// createStore(reducer){}

// reducer의 인자 : 1. state= 상태(데이터)  2. action= 데이터에 가해지는 행위
//reducer(state, action){}


export default createStore(function (state, action){
    if(state===undefined){
        return {number:0}
    }
    if(action.type==='INCREMENT'){
        return {...state, number : state.number + action.size}
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())