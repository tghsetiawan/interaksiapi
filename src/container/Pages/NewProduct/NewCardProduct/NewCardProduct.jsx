import React, { Component } from 'react';
import Counter from "./Counter"

class NewCardProduct extends Component{
    render(){
        return(
            <div className="card">
                <p className="product-title">Daging Ayam Berbumbu</p>
                <p className="product-price">Rp. 350.000</p>
                <Counter />
            </div>
        )
    }
    
}

export default NewCardProduct;