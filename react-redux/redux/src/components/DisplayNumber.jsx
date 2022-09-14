import React, {Component} from "react";

/*readOnly : 수정하지 읺고 출력만 함  */
export default class DisplayNumber extends Component {
    render() {
        return (
            <div>
                <h1>Display Number</h1>
                <input type="text" value="0" readOnly></input> </div>
        );
    }
}
