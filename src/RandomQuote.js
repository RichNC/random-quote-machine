import React from 'react';
import { quotes } from './Quotes';
import { Button } from './Button';
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
    const currentColor = document.querySelector('body').style.background;
    console.log(currentColor)
    const color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.background = color;
    document.getElementById('card').style.color = color;
    document.querySelector('button').style.background = color;

  }
  render(){
    let quoteIndex = this.randomIndex();
    return (
      <div id="card">
        <p id="text"><i className="fas fa-quote-left"></i> {quotes[quoteIndex].text} <i className="fas fa-quote-right"></i></p>
        <p id="author">- {quotes[quoteIndex].author}</p>
        <div id="button">
          <div id="social-links">
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-tumblr-square"></i>
          </div>
          <Button onClick={this.handleClick} />

        </div>
      </div>
      )
  }
}

