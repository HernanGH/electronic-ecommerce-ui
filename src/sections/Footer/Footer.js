import React from 'react';
import Reflux from 'reflux';
import AppStore from '../../AppStore';
import AppActions from '../../AppActions';
class Footer extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {
            sortBy: '',
            total: 32,
            skip: 16
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
    render () {
        return (
          <div className="row navbar footer">
            <div className="col-md-3">
              <h4>{this.state.skip + 16} of {this.state.total} products</h4>
            </div>
            <div className="col-md-3 col-md-offset-6">
              {this._renderPrevious()}
              {this._renderNext()}
            </div>
          </div>
        );
    }
}

export default Footer;
