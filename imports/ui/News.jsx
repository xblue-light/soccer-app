import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';


class News extends Component {
    constructor(props) {
      super(props);
      this.state = {
        news: [],
        error: false,
      };
    }

    componentDidMount() {
      //const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=3c5c8f726f4f4d87a352e63017c68eb0`;
      const url = `https://randomuser.me/${this.props.news.type}?${this.props.news.results}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            //news: data.articles
            news: data.results

          })
          console.log(data.results)
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });
    }

    renderItems() {
      if (!this.state.error) {
        return this.state.news.map((item, index) => (
          //<NewSingle key={item.url} item={item} />
          <NewSingle key={index} item={item} />
        ));
      } else {
        return <Error />
      }
    }

    render() {
      return (
        <div className="inner-wrapper">
          {this.renderItems()}
        </div>
      );
    }
  }

export default News;
