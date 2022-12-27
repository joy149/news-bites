import React, { Component } from 'react'
import Endpoint_Constants from '../Constants/endpoint-constants';
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
        articles : [],
        loading : false
    }
  }

  async componentDidMount() {
    let data = await fetch(Endpoint_Constants.topHeadlines.url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles
    })
    console.log(parsedData);
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsBites - Top Headlines</h1>
        <div className='row'>
        {this.state.articles.map((item)=>{
          return (
            <div className='col-md-4' key={item.url}>
                <NewsItem title={item.title?item.title.slice(0,40):""} description={item.description?item.description.slice(0,88):""} imageUrl={item.urlToImage?item.urlToImage:Endpoint_Constants.altImage.url} newsUrl={item.url}/>
            </div>
          )
        })}
      </div>
      </div>
    )
  }
}
