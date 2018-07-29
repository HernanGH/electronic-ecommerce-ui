import Reflux from 'reflux';
import AppActions from './AppActions';
import axios from 'axios';
import history from './history';
export default class AppStore extends Reflux.Store {
    constructor () {
        super();
        let decodedToken = false;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.REACT_APP_TOKEN;
        console.log('ENV:', process.env);
        this.state = {
            skip: 0,
            apiUrl: process.env.REACT_APP_API_URL,
            userData: {}
        };
        this.listenables = AppActions;
    }
    onGetUser() {
      return axios.get(this.state.apiUrl + 'user/me')
      .then((results) => {
          this.setState({userData: results.data});
      });
    }
    onGetProducts() {
      return axios.get(this.state.apiUrl + 'products')
      .then((results) => {
          this.setState({productList: results.data});
      });
    }
    onPrevious() {
      if (this.state.skip > 0) {
          this.setState({skip: this.state.skip - 16});
      }
    }
    onNext() {
      if (this.state.skip < this.state.productList.length) {
          this.setState({skip: this.state.skip + 16});
      }
    }
}
