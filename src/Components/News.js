import React, { Component } from "react";
import Endpoint_Constants from "../Constants/endpoint-constants";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = "NewsBites - " + props.title;
  }

  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  updateNews = async (pg) => {
    this.setState({ loading: true });
    let data = await fetch(
      this.props.url + pg + `&pageSize=${this.props.pageSize}`
    );

    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: pg,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  };

  handlePrevious = async () => {
    let num = this.state.page - 1;
    this.updateNews(num);
  };

  handleNext = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let num = this.state.page + 1;
      this.updateNews(num);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">{this.props.title}</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((item) => {
            return (
              !this.state.loading && (
                <div className="col-md-4" key={item.url}>
                  <NewsItem
                    title={item.title ? item.title: ""}
                    description={
                      item.description ? item.description: ""
                    }
                    imageUrl={
                      item.urlToImage
                        ? item.urlToImage
                        : Endpoint_Constants.altImage.url
                    }
                    newsUrl={item.url}
                    author={item.author}
                    storyDate={item.publishedAt}
                  />
                </div>
              )
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
