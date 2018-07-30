import React from 'react';
import Reflux from 'reflux';
import {Link} from 'react-router-dom';
import AppStore from '../../AppStore';
import AppActions from '../../AppActions';
export default class ItemProduct extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {
            product: props.product,
            topicActivity: {
                creations: 0,
                relatedOptions: 0
            },
            flipped: false
        };
        this.store = AppStore;
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.product === this.state.product) {
            return;
        }
        this.setState({product: nextProps.product});
        this.getTopicActivity(nextProps.product);
    }
    onMouseLeave() {
      console.log("NO VIENDO",  this.state);
      this.setState({flipped: false});
    }
    onMouseEnter() {
      if (!this.state.flipped) {
        console.log("VIENDO",  this.state);
      }
      this.setState({flipped: true});
    }
    _enableRedeem() {
        if (this.state.userData.points < this.props.product.cost) {
          var points = this.props.product.cost - this.state.userData.points;
          return (<span className='badge chips msg-need'>You need {points}
              <img src='./coin.svg'/>
            </span>
          );
        }
        return (<img className='shop-icon ' src='./buy-blue.svg'/>);
    }
    _enableProductInformation() {
        if (this.state.userData.points > this.props.product.cost && this.state.flipped) {
            return (<div className="over-information">
                <p>{this.props.product.cost} <img src='./coin.svg'/></p>
                <button type="button" className="btn btn-default">Redeem Now</button>
            </div>);
        }
        return ('');
    }
    render () {
        return (
          <div className='col-md-3' onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
            <div className='card'>
              {this._enableRedeem()}
              <img className='card-img-top' src={this.props.product.img.url} />
              <div className="card-body">
                  <p className="card-text">{this.props.product.category}</p>
                  <h5 className="card-title">{this.props.product.name}</h5>
              </div>
              {this._enableProductInformation()}
            </div>
          </div>
        );
    }
}
