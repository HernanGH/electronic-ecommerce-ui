import React from 'react';
import Reflux from 'reflux';
import Header from '../sections/Header/Header';
import NavBar from '../sections/NavBar/NavBar';
// import Footer from '../sections/Footer';
import DocumentMeta from 'react-document-meta';

class HomePage extends Reflux.Component {
  componentDidMount() {}
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
          'og:description': 'Canjet tus puntos',
          // 'og:image': 'https://alpha.top.global/images/brandtop.png',
        }
      }
    };
    return <div>
      <a className='gravaBrand' href='https://grava.digital' target='_blank' data-tip='Grava.digital' data-for='gravaBrand'/>
      <DocumentMeta {...meta}/>
      <Header/>
      <NavBar/>
      <main>
        <div className="App">
          <header className="">
            <h1 className="App-title">Welcome to React with Reflux</h1>
          </header>
          <p className="App-intro">
            To get started, edit
            <code>src/App.js</code>
            and save to reload.
          </p>
        </div>
      </main>
    </div>;
  }
}

export default HomePage;
