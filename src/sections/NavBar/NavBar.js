import React from 'react';
import Reflux from 'reflux';
// import AppStore from '../AppStore';
import history from '../../history';
import './NavBar.css';
class NavBar extends Reflux.Component {
    constructor (props) {
        super(props);
        this.state = {
            sortBy: '',
            total: 32,
            skip: 16
        };
    }
    componentDidMount () {
    }

    render () {
        return (
          <div className="navbar">
            <div className="col-md-2 box-info-products">
              <h4>{this.state.skip} of {this.state.total} products</h4>
            </div>
            <div className="col-md-6">
                <h4>Sort By: Most Recent Lowest Price Highest Price  </h4>
            </div>
            <div className="col-md-2 col-md-offset-2">
              <button type="button" class="btn-circle btn btn-default btn-lg">
                <span className="glyphicon glyphicon-chevron-left"></span>
              </button>
              <button type="button" class="btn-circle btn btn-default btn-lg">
                <span className="glyphicon glyphicon-chevron-right"></span>
              </button>
            </div>
          </div>
        );
    }
}

export default NavBar;
