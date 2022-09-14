import React, {Component} from "react";
import store from "../store";

/*readOnly : 수정하지 읺고 출력만 함  */
export default class DisplayNumber extends Component {
    state={number:store.getState().number}
    // store의 state의 데이터 변경시 리렌더링을 위해 constructor 실행
    constructor(props) {
        super(props);
        store.subscribe(function(){  // store를 구독하여 store의 state를 변경
            this.setState( {number : store.getState().number});
        }.bind(this));
    }
    render() {
        return (
            <div>
                <h1>Display Number</h1>
                <input type="text" value={this.state.number} readOnly></input> </div>
        );
    }
}
