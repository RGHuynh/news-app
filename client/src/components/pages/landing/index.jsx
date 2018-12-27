import React, {Component} from 'react';
import './index.css';
import Navigation from '../../navigations';
import Header from '../../header';
import TopPick from '../../topPick';
import axios from 'axios';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            title: '',
            subTitle: '',
            article: ''
        }
    }

    render(){
        return(
            <main>
                <Navigation />
                <div className="mastBody">
                    <Header />
                    <TopPick />
                </div>
            </main>
        );

    }
}
