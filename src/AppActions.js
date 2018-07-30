import Reflux from 'reflux';

var AppActions = Reflux.createActions([
    'getUser', 'getProducts', 'previous', 'next', 'sortBy' ,'redeemProduct'
]);

export default AppActions;
