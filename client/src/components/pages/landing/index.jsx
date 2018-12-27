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
        this.getNews = this.getNews.bind(this);
        this.getNews();
    }

    getNews() {
        axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'bitcoin',
                from: '2018-12-24',
                sortBy: 'publishedAt'
                // api_key
            }
        }).then((resp) => {
            console.log(resp.data.articles)
            this.setState({
                author: resp.data.articles[0].author,
                title: resp.data.articles[0].title,
                subTitle: resp.data.articles[0].description,
                article: resp.data.articles[0].content,
            })
        })
    }

    render(){
        return(
            <main>
                <Navigation />
                <div className="mastBody">
                    <Header 
                        author={this.state.author}
                        title={this.state.title}
                        subTitle={this.state.subTitle}
                        article={this.state.article}
                    />
                    <TopPick />
                </div>
            </main>
        );

    }
}
