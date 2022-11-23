
import Navbar from './components/Navbar/Navbar';

import React, { Component } from 'react'
import NewsBody from './components/NewsItems/NewsBody';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element = {<NewsBody key="general" pageSize={this.pageSize} country = "in" category =  "general"/>}/>
      <Route path='/business' element = {<NewsBody key="business" pageSize={this.pageSize} country = "in" category =  "business"/>}/>
      <Route path='/entertainment' element = {<NewsBody key="entertainment" pageSize={this.pageSize} country = "in" category =  "entertainment"/>}/>
      <Route path='/health' element = {<NewsBody key="health" pageSize={this.pageSize} country = "in" category =  "health"/>}/>
      <Route path='/science' element = {<NewsBody key="science" pageSize={this.pageSize} country = "in" category =  "science"/>}/>
      <Route path='/sports' element = {<NewsBody key="sports" pageSize={this.pageSize} country = "in" category =  "sports"/>}/>
      <Route path='/technology' element = {<NewsBody key="technology" pageSize={this.pageSize} country = "in" category =  "technology"/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}
