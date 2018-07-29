import React from 'react';
import Reflux from 'reflux';
import Header from '../sections/Header/Header';
import NavBar from '../sections/NavBar/NavBar';
import ProductList from '../sections/ProductList/ProductList'
import Footer from '../sections/Footer/Footer';
import DocumentMeta from 'react-document-meta';
import AppStore from '../AppStore';
import AppActions from '../AppActions';

class HomePage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
    this.store = AppStore;
  }
  componentDidMount() {
    AppActions.getProducts();
  }
  render() {
    const meta = {
      title: 'Electronic',
      description: 'Canjea tus puntos por un increible producto',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        },
        property: {
          'og:url': process.env.REACT_APP_PUBLIC_URL,
          'og:title': 'Electronic',
          'og:description': 'Canje tus puntos',
        }
      }
    };
    return <div>
      <DocumentMeta {...meta}/>
      <Header/>
      <div className='container'>
        <NavBar/>
        <main>
            <ProductList products={this.state.productList.slice(this.state.skip, this.state.skip + 16)} />
        </main>
        <Footer/>
      </div>
    </div>;
  }
}

export default HomePage;
