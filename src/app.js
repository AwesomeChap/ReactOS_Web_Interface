import React, {Component} from 'react';
import Header from './components/header';
import Filters from './components/filters';
import Page from './components/page';

export default class App extends Component{
  render(){
    return(
      <>
        <Header/>
        <Filters/>
        <Page/>
      </>
    );
  }
}