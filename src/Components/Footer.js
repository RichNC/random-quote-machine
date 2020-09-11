import React from 'react';
import { Button } from './Button';
import { quotes } from './Quotes';
import { quote, quoteAuthor } from '/../RandomQuote';

export const Footer = () => {
  return (
    <footer>
      <div id="social-links">
        <a id="tweet-quote" className="twitter-share-button" href={"https://twitter.com/intent/tweet?text=" + quote + " -" + quoteAuthor} data-size="large" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
      </div>
      <Button onClick={this.handleClick} id="new-quote" />
    </footer>
  )
}
