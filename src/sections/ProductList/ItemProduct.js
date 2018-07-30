import React from 'react';
import Reflux from 'reflux';
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
      this.setState({flipped: false});
    }
    onMouseEnter() {
      this.setState({flipped: true});
    }
    redeemProduct(productId) {
        AppActions.redeemProduct({productId: this.props.product._id, productCost: this.props.product.cost});

    }
    _enableRedeem() {
        if (this.state.userData.points < this.props.product.cost) {
          var points = this.props.product.cost - this.state.userData.points;
          return (<span className='badge chips msg-need'>You need {points}
              <img alt='coin' src='./coin.svg'/>
            </span>
          );
        }
        return (<img alt='shop-ico' className='shop-icon ' src='./buy-blue.svg'/>);
    }
    _enableProductInformation() {
        if (this.state.userData.points >= this.props.product.cost && this.state.flipped) {
            return (<div className="over-information">
                <p>{this.props.product.cost} <img alt='coin' src='./coin.svg'/></p>
                <button type="button" onClick={() => this.redeemProduct()} className="btn btn-default">Redeem Now</button>
            </div>);
        }
        return ('');
    }
    render () {
        return (
          <div className='col-md-3' onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
            <div className='card'>
              {this._enableRedeem()}
              <img alt='card' className='card-img-top' src={this.props.product.img.url} />
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
