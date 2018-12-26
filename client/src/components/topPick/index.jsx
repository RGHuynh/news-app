import React from 'react';
import './index.css';
import TPBackground from '../../pictures/topPickArticleBackground.svg';

export default function TopPick() {
    return(
        <article className="toppick">
            <div className="container toppick-container" style={{backgroundImage: `url(${TPBackground})`}}>
                <div className="body-parag-wrapper">
                    <p className="body-parag">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>

                <div className="articles-container">
                    <div className="article-container">
                        <div className="article-image-wrapper">
                        </div>
                        <div className="article-descript-wrapper">
                            <p className="article-descript">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="article-arthur-wrapper">
                            <h6 className="article-arthur">authorname</h6>
                        </div>
                    </div>

                    <div className="article-container">
                        <div className="article-image-wrapper">
                        </div>
                        <div className="article-descript-wrapper">
                            <p className="article-descript">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="article-arthur-wrapper">
                            <h6 className="article-arthur">authorname</h6>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );

}