import React, { Component } from 'react'
import Header from "./header/Header"
import Container from "./container/Container"
import Footer from "./footer/Footer"
import "./DemoOne.css"
export default class DemoOne extends Component {
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
