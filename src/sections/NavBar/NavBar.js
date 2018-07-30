import React from 'react';
import Reflux from 'reflux';
import AppStore from '../../AppStore';
import AppActions from '../../AppActions';
import './NavBar.css';
class NavBar extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {
            sortBy: 'recent',
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
            <img alt='previous' src='/arrow-left.svg' />
          </a>
        );
    }
    _renderNext = () => {
        var hidden = this.state.skip && this.state.productList && this.state.skip + 16 === this.state.productList.length;
        return (
          <a onClick={this.next} className={hidden ? 'invisible' : ''}>
            <img alt='next' src='/arrow-right.svg' />
          </a>
        );
    }
    sortBy(filter) {
      this.setState({sortBy: filter});
      AppActions.sortBy(filter);
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
                <span onClick={() => this.sortBy('recent')} className={`badge chips ${this.state.sortBy === 'recent' ? 'active' : ''}`}>Most Recent</span>
                <span onClick={() => this.sortBy('lowest')} className={`badge chips ${this.state.sortBy === 'lowest' ? 'active' : ''}`}>Lowest Price</span>
                <span onClick={() => this.sortBy('highest')} className={`badge chips ${this.state.sortBy === 'highest' ? 'active' : ''}`}>Highest Price  </span>
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
