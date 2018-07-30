import React from 'react';
import Reflux from 'reflux';
import AppStore from '../../AppStore';
import './Header.css';
class Header extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.store = AppStore;
    }
    componentDidMount () {
    }
    _showNotification() {
        if (this.state.reedemSuccess) {
          return (<div className="col-md-3 alert alert-info" role="alert">
          Redeem Success
          </div>);
        }
        return (<div className='col-md-3'></div>);
    }
    render () {
        return (
          <div>
            <div className='header'>
              {this._showNotification()}
              <div className="col-md-3 col-md-offset-6 user-info">
                <h3>
                  {this.state.userData.name}
                  <span className="badge chips"> {this.state.userData.points} <img alt='coin' src='/coin.svg' /> </span>
                </h3>
              </div>
            </div>
            <div className='row'>
              <img alt='Electronic' className='slide' src='/header-x1.png' />
              <p className='title'>Electronic</p>
            </div>
          </div>
        );
    }
}

export default Header;
