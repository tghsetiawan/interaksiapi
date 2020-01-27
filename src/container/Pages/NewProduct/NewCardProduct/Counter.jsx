import React, {Component} from 'react';
import {connect} from 'react-redux';
import globalActionType from '../../../../redux/reducer/globalActionType';

class Counter extends Component{

    render(){
        return(
            <div>
                <button onClick={this.props.handleMinus}>-</button>
                <input type="text" value={this.props.order}/>
                <button onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handlePlus: () => dispatch({type: globalActionType.PLUS_ORDER}) ,
        handleMinus: () => dispatch({type: globalActionType.MINUS_ORDER}) ,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;