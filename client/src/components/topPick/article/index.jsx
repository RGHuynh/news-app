import React from 'react';
import './index.css';

export default function Article({image, title, author}) {
    return(
    <div className="article-container">
        <div className="article-image-wrapper">
            <img className="article-image" src={image}/>
        </div>
        <div className="article-descript-wrapper">
            <p className="article-descript">{title}</p>
        </div>
        <div className="article-arthur-wrapper">
            <h6 className="article-author">{author}</h6>
        </div>
    </div>
    );
}