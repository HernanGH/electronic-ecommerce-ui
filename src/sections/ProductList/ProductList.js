import React from 'react';
import Reflux from 'reflux';
import ItemProduct from './ItemProduct';

export default class ProductList extends Reflux.Component {
    render () {
        return (
              <ul className='row'>
                {
                      this.props.products.map((product, index) => {
                          return <ItemProduct key={product.name + '-' + index} product={product} />;
                      })
                }
              </ul>
        );
    }
}
