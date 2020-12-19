import React, { Component } from 'react';
import Preview_collection from '../../components/PreviewCollections/Preview_collection.component';
import  SHOP_DATA from './shop.data'


class Shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections: SHOP_DATA,
        }
    }
    
    render() {
        const {collections}=this.state;
        return (
            <div>
                {
                    collections.map(({id,...otherCollectionProps})=>
                    (
                        <Preview_collection key={id} {...otherCollectionProps}></Preview_collection>
                    ))
                    }
            </div>
        );
    }
}

export default Shop;
