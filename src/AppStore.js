import Reflux from 'reflux';
import AppActions from './AppActions';
import axios from 'axios';
export default class AppStore extends Reflux.Store {
    constructor () {
        super();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.REACT_APP_TOKEN;
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
    onSortBy(filter) {
      this.state.productList.sort((current, next) => {
          var firsts = current;
          var lasts = next;
          if (filter === 'highest') {
              firsts = next;
              lasts = current;
          }
          return firsts.cost - lasts.cost;
      });
      this.setState({productList: this.state.productList});
    }
    onRedeemProduct(data) {
      return axios.post(this.state.apiUrl + 'redeem', {productId: data.productId})
      .then((results) => {
          this.state.userData.points = this.state.userData.points - data.productCost;
          this.setState({userData: this.state.userData});
          this.setState({reedemSuccess: true});
          setTimeout(() => {
            this.setState({reedemSuccess: false});
          }, 5000);
      })
      .catch((err) => {
          console.error('ERROR', err);
      });
    }

}
