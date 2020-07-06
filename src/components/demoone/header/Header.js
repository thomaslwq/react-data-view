import React, { Component } from 'react'
export default class Header extends Component {
    componentDidMount(){
        (function(){
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth()+1;
            const day = now.getDate();
            document.getElementById("nowDate").innerHTML = year+"年"+month+"月"+day+"日";
            
        })()
    }
    render() {
        return (
            <header id="header">
                <h3 className="header-title">上市公司全景概览</h3>
                <div className="header-info header-info-l">数据来源：上交所 &amp; 深交所</div>
                <div className="header-info header-info-r">数据日期：<span id="nowDate"></span></div>
            </header>
        )
    }
}
