import React from 'react';
import { quotes } from './Quotes';
import { Button } from './Button';

export class RandomQuote extends React.Component {
  constructor(props){
    super(props);
    this.state={
      quote: ""
    }
    this.handleClick = this.handleClick.bind(this);
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
  render(){
    let quoteIndex = this.randomIndex();
    return (
      <div>
        <p><i class="fas fa-quote-left"></i> {quotes[quoteIndex].text} <i class="fas fa-quote-right"></i></p>
        <p>- {quotes[quoteIndex].author}</p>
        <Button onClick={this.handleClick} />
      </div>
      )
  }
}
