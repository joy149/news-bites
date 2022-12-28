import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import Endpoint_Constants from './Constants/endpoint-constants'

export default class App extends Component {

landingPage = [
  {
    url: Endpoint_Constants.topHeadlines.url,
    title: "Top Headlines"
  },
  {
    url: Endpoint_Constants.sports.url,
    title: "Sports"
  },
  {
    url: Endpoint_Constants.business.url,
    title: "Business"
  },
  {
    url: Endpoint_Constants.entertainment.url,
    title: "Entertainment"
  }
]
  render() {
    return (
      <div>
        <Navbar />
        {this.landingPage.map((item) => {
           return (
            <div key={item.url}>
              <News title={item.title} pageSize={3} url={item.url} />
            </div>
           );
        })}
      </div>
    )
  }
}
