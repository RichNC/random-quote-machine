import React from 'react';
import { quotes } from './Quotes';
import { colors } from './Colors';


export class RandomQuote extends React.Component {
  constructor(props){
    super(props);
    this.state={
      quote: "",
      color: "#282C34"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.applyBackgroundColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyBackgroundColor();
  }
  randomIndex(){
    let index = Math.floor(Math.random() * quotes.length);
    return index;
  }
  handleClick(){
    this.setState({
      quote: quotes[this.randomIndex()].text
    })
  }
  applyBackgroundColor(){
    const color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.background = color;
  }

  render(){
    let quoteIndex = this.randomIndex();
    let quote = quotes[quoteIndex].text
    let quoteAuthor = quotes[quoteIndex].author
    return (
      <div className="content-box">
        <div id="quote-box" className="sign-shape-1">
          <p id="text"><i className="fas fa-quote-left"></i> {quote} <i className="fas fa-quote-right"></i></p>
          <p id="author">- {quoteAuthor}</p>
        </div>

        <footer>
          <div id="social-links">
            <a id="tweet-quote" className="twitter-share-button" href={"https://twitter.com/intent/tweet?text=" + quote + " -" + quoteAuthor} data-size="large" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
          </div>
          <button onClick={this.handleClick} id="new-quote">Next</button>
        </footer>

      </div>
      )
  }
}



