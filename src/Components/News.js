import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "Stokes and Botham discuss the future of cricket",
        "description": "Ben Stokes speaks to Lord Botham about transforming Test cricket, their heroics at Headingley and opening up about mental health.",
        "url": "http://www.bbc.co.uk/sport/cricket/64051893",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1F49/production/_128090080_bbc-sport-index-imagery-2-split-images-gradient-64bc4cd2-46d6-4472-867b-37ba626cd191.png",
        "publishedAt": "2022-12-26T08:37:21.4046062Z",
        "content": "Ben Stokes and Ian Botham are two of England's greatest ever cricketers\r\nThey are two titans of English cricket - Ian Botham and Ben Stokes.\r\nStokes has revolutionised the way Test cricket is played … [+6386 chars]"
    },
    {
        "source": {
            "id": "news-com-au",
            "name": "News.com.au"
        },
        "author": "Alex Blair",
        "title": "Aussies spend Boxing Day trashing Bradman",
        "description": "<p>Social media&rsquo;s love affair with cancelling long-dead celebrities has reared its head again, this time with Australian cricket icon Don Bradman in the firing line.</p>",
        "url": "https://www.news.com.au/sport/sports-life/champions/aussies-spend-boxing-day-trashing-bradman/news-story/4cac652ff2df1b147cd6114388415c45",
        "urlToImage": "https://content.api.news/v3/images/bin/973d26af70b52e8a429afdd2444dda79",
        "publishedAt": "2022-12-26T05:58:00Z",
        "content": "Social media’s love affair with cancelling long-dead celebrities has reared its head again, this time with Australian cricket icon Don Bradman in the firing line.\r\nBradman, known as one of the histor… [+3102 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
        articles : this.articles
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsBites - Top Headlines</h1>
        <div className='row'>
        {this.state.articles.map((item)=>{
          return (
            <div className='col-md-4' key={item.url}>
                <NewsItem title={item.title.slice(0,40)} description={item.description.slice(0,88)} imageUrl={item.urlToImage} newsUrl={item.url}/>
            </div>
          )
        })}
      </div>
      </div>
    )
  }
}
