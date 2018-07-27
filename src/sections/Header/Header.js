import React from 'react';
import Reflux from 'reflux';
// import AppStore from '../AppStore';
import history from '../../history';
import './Header.css';
class Header extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: 'John Kite',
            points: 6000
        };
    }
    componentDidMount () {
    }

    render () {
        return (
          <div>
            <div className="col-md-3 col-md-offset-9">
              <h3>
                {this.state.username} {this.state.points}
              </h3>
            </div>
            <img src='/header-x1.png' />
          </div>
        );
    }
}

export default Header;
