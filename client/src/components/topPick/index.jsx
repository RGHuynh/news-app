import React, {Component} from 'react';
import './index.css';
import TPBackground from '../../pictures/topPickArticleBackground.svg';
import Article from './article';
import axios from 'axios';

export default class TopPick extends Component {
    constructor(props) {
        super(props);
        this.getArticles = this.getArticles.bind(this);
        this.state = {
            articles: []
        }
        this.getArticles();
    }

    getArticles() {
        axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'bitcoin',
                from: '2018-12-24',
                sortBy: 'publishedAt',
                // api_key
            }
        })
        .then((resp) => {
            this.setState({articles: resp.data.articles})
        })
    }

    render(){
        return(
            <article className="toppick">
                <div className="container toppick-container" style={{backgroundImage: `url(${TPBackground})`}}>
                    <div className="body-parag-wrapper">
                        <p className="body-parag">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
    
                    <div className="articles-container">
                        {this.state.articles.map(article => {
                            return(<Article 
                                image={article.urlToImage}
                                title={article.title}
                                author={article.author}
                            />)
                        })}
                    </div>
                </div>
            </article>
        );
    }

}