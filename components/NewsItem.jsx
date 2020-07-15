import React from 'react';
import styles from './news.module.scss';
import PropTypes from 'prop-types';

const NewsItem = ({ news }) => {
  const {
    url, 
    title, 
    author, 
    urlToImage, 
    publishedAt
  } = news;

  return (
    <li className={styles.item} >
      <h3><a href={url}>{title}</a></h3>
      <p className={styles.item__content}>
        <strong>Author: </strong>
        {author}
      </p>
      <img src={urlToImage} alt="news title img" className={styles.item__img} />
      <p className={styles.item__content}>{publishedAt}</p>
    </li>);
};

export default NewsItem;

NewsItem.propTypes = {
  news: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
  }).isRequired,
};

