import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Graybox from './components/Graybox.js'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="page-body">
        <Graybox />
        <Post entry="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch." commentNum="12" likesNum="124"/>
        <Post entry="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started." commentNum="15" likesNum="45"/> 
        </div>
      </div>
    );
  }
}

export default App;
