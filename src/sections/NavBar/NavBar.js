import React from 'react';
import Reflux from 'reflux';
import AppStore from '../../AppStore';
import AppActions from '../../AppActions';
import './NavBar.css';
class NavBar extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {
            sortBy: '',
            total: 32,
        };
        this.store = AppStore;
    }
    componentDidMount () {
    }
    next() {
        AppActions.next();
    }
    previous() {
        AppActions.previous();
    }
    _renderPrevious = () => {
        var hidden = this.state.skip === 0;
        return (
          <a onClick={this.previous} className={hidden ? 'invisible' : ''}>
            <img src='/arrow-left.svg' />
          </a>
        );
    }
    _renderNext = () => {
        var hidden = this.state.skip && this.state.productList && this.state.skip + 16 === this.state.productList.length;
        return (
          <a onClick={this.next} className={hidden ? 'invisible' : ''}>
            <img src='/arrow-right.svg' />
          </a>
        );
    }
    render () {
        return (
          <div className="navbar">
            <div className="col-md-2 box-info-products">
              <h4>{ this.state.skip ? this.state.skip + 16 : 16} of {this.state.productList ? this.state.productList.length : 0} products</h4>
            </div>
            <div className="col-md-6">
                <h3>
                Sort By:
                <span class="badge chips">Most Recent</span>
                <span class="badge chips">Lowest Price</span>
                <span class="badge chips">Highest Price  </span>
                </h3>
            </div>
            <div className="col-md-2 col-md-offset-2">
                {this._renderPrevious()}
                {this._renderNext()}
            </div>
          </div>
        );
    }
}

export default NavBar;
