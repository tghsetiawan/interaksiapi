import React, { Component } from 'react';
import {connect} from 'react-redux';

class Product extends Component{
    render(){
        return(
            <div>
                <p>Judul Halaman Product</p>
                <hr/>  
                <p>Isi Halaman Product</p>
                <p>Jumlah Order : {this.props.order}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    } 
}

export default connect(mapStateToProps)(Product);