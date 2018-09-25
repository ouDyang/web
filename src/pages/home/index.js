import React, {Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from "./style";
import HomeList from './components/HomeList';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt={""} src="//upload.jianshu.io/admin_banners/web_images/4459/9e3d0d61118390d4b9a9c51d14bcca464c6068ce.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <HomeList/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;