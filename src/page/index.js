import React,{Component} from 'react';
import ReactDOM from 'react-dom';


import Header from '../component/header/header.js';
import Footer from '../component/footer/footer.js';
import Main from '../component/main/main.js';
import Left from '../component/left/left.js';

import Right from '../component/right/right.js';
import Test1 from '../component/test1/test1.js';
import Test3 from '../component/test3/test3.js';
ReactDOM.render(
    <div>
        <Main/>
        <Header/>
        <Left/>
        <Right/>
        <Test1/>
        <Test3/>
        <Footer/>
    </div>,document.getElementById('test')
);
