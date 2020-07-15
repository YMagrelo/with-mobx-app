import React from 'react';
import styles from './news.module.scss';


const NewsItem = ({ news }) => {
const {url, title, author, urlToImage, publishedAt} = news;

  return (
    <li className={styles.item}>
      <h3><a href={news.url}>{news.title}</a></h3>
      <p className={styles.item__content}>
        <strong>Author: </strong>
        {news.author}
      </p>
      <img src={news.urlToImage} alt="news title img" className={styles.item__img} />
      <p className={styles.item__content}>{news.publishedAt}</p>
    </li>);
};

export default NewsItem;

