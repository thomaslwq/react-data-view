import React, { Component } from 'react'
import "./App.css"
import Header from "./components/header/Header"
import Container from "./components/container/Container"
import Footer from "./components/footer/Footer"

export default class App extends Component {
  render() {
    return (
      <div>
          <Header></Header>
          <Container></Container>
          <Footer></Footer>
      </div>
    )
  }
}
