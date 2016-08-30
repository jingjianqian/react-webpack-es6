import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Header from '../component/header/header.js';
import Footer from '../component/footer/footer.js';
import Main from '../component/main/main.js';
import Left from '../component/left/left.js';

import Right from '../component/right/right.js';
import Test2 from '../component/test2/test2.js';
import Test1 from '../component/test1/test1.js';
import Test4 from '../component/test4/test4.js';
ReactDOM.render(
    <div>
        <Main/>
        <Header/>
        <Footer/>
        <Left/>
        <Right/>
        <Test1/>
        <Test2/>
        <Test4/>
    </div>,document.getElementById("test")
);