import React from 'react';
import Reflux from 'reflux';
import {Link} from 'react-router-dom';
// import axios from 'axios';
// import './ItemProduct.css';
export default class ItemProduct extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {
            product: props.product,
            topicActivity: {
                creations: 0,
                relatedOptions: 0
            }
        };
        // this.getTopicActivity(props.product);
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.product === this.state.product) {
            return;
        }
        this.setState({product: nextProps.product});
        this.getTopicActivity(nextProps.product);
    }
    // getTopicActivity =(product) => {
    //     return axios.get(`${process.env.REACT_APP_API_URL}/api/topics/activity/${product}`)
    //     .then((results) => {
    //         this.setState({topicActivity: {
    //             creations: results.data.creations,
    //             relatedOptions: results.data.relatedOptions
    //         }});
    //     });
    // }
    // <div className='name_product center-align'>
    // <h5>{this.props.product.category}</h5>
    // <h5>{this.props.product.name}</h5>
    // </div>
    render () {
        return (
          <div className='col-md-3'>
            <div className='card'>
              <img className='shop-icon ' src='./buy-blue.svg'/>
              <img className='card-img-top' src={this.props.product.img.url} />
              <div className="card-body">
                  <p className="card-text">{this.props.product.category}</p>
                  <h5 className="card-title">{this.props.product.name}</h5>
              </div>
            </div>
          </div>
        );
    }
}
