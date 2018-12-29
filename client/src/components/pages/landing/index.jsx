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
        axios.get('https://gentle-thicket-67528.herokuapp.com/news', {
            params: {
                q: 'bitcoin',
                from: '2018-12-24',
                sortBy: 'publishedAt'
            }            
        }).then((resp) => {
            console.log(resp.data.news.articles[0])
            let article = resp.data.news.articles[0]
            this.setState({
                author: article.author,
                title: article.title,
                subTitle: article.description,
                article: article.content,
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
