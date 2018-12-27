import React from 'react';
import Background from '../../pictures/background.svg';
import './index.css';

export default function Header({title, author, subTitle, article}) {
    return(
        <header className="masthead">
            <div className="container masthead-container" style={{backgroundImage: `url(${Background})`}}>
                <div className="newsBio-container">
                    <div className="author-wrapper">
                        <h1 className="author">{author}</h1>
                    </div>
                    <div className="title-wrapper">
                        <h1 className="title">{title}</h1>
                    </div>
                    <div className="subtitle-wrapper">
                        <h2 className="subtitle">{subTitle}</h2>
                    </div>
                    <div className="btn-wrapper">
                        <button className="btn btn__design">Read More</button>
                    </div>
                </div>
                <div></div>
            </div>
        </header>
    );
}