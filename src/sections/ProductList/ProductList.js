import React from 'react';
import Reflux from 'reflux';
import ItemProduct from './ItemProduct';
// import RcIf, {RcElse} from 'rc-if';

export default class ProductList extends Reflux.Component {
    render () {
        this.props.products.map((name, index) => {
            // console.log('[NAME]: ', name);
            // console.log('[INDEX]: ', index);
        });
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
