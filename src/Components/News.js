import React, { Component } from 'react'
import Endpoint_Constants from '../Constants/endpoint-constants';
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
        articles : [],
        loading : false,
        page : 1,
        totalResults : 0
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    let data = await fetch(this.props.url + this.state.page + `&pageSize=${this.props.pageSize}`);
    
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page : 1,
      totalResults : parsedData.totalResults,
      loading: false
    })
    //console.log(parsedData);
  }

  handlePrevious = async () => {
    let num = this.state.page - 1;
    this.setState({ loading: true })
    let data = await fetch(this.props.url + num + `&pageSize=${this.props.pageSize}`);
    
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page : this.state.page - 1,
      loading : false
    })

  }

  handleNext = async ()=> {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

    }
    else {
        let num = this.state.page + 1;
        this.setState({ loading: true })
        let data = await fetch(this.props.url + num + `&pageSize=${this.props.pageSize}`);
        
        let parsedData = await data.json();
        this.setState({
          articles : parsedData.articles,
          page : this.state.page + 1,
          loading : false
        })
  }
    //console.log(this.state.page)
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>{this.props.title}</h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
        {this.state.articles.map((item)=>{
          return (
            !this.state.loading && <div className='col-md-4' key={item.url}>
                <NewsItem title={item.title?item.title.slice(0,40):""} description={item.description?item.description.slice(0,88):""} imageUrl={item.urlToImage?item.urlToImage:Endpoint_Constants.altImage.url} newsUrl={item.url}/>
            </div>
          )
        })}
      </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}
