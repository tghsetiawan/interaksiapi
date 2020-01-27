import React, { Component, Fragment } from 'react';
import NewCardProduct from './NewCardProduct/NewCardProduct';
import {connect} from 'react-redux';


class NewProduct extends Component{
    
    render(){
        return(
            <Fragment>
                <p>Judul Halaman New Product</p>
                <hr/>  
                <p>Isi Halaman New Product</p>
                <p>Jumlah Order : {this.props.order}</p>
                <NewCardProduct />
            </Fragment>
        )
    }
    
}

const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    } 
}

export default connect(mapStateToProps)(NewProduct);