import React from 'react';
import Reflux from 'reflux';
import AppStore from '../../AppStore';
import './Header.css';
class Header extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: 'John Kite'
        };
        this.store = AppStore;
    }
    componentDidMount () {
        setTimeout(() => {
          console.log('[STATE]: ', this.state);
        }, 4000);
    }

    render () {
        return (
          <div>
            <div className='header'>
              <div className="col-md-3 col-md-offset-9 user-info">
                <h3>
                  {this.state.userData.name} {this.state.userData.points}
                    <img src='/coin.svg' />
                </h3>
              </div>
            </div>
            <div className='row'>
              <img className='slide' src='/header-x1.png' />
            </div>
          </div>
        );
    }
}

export default Header;
