import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import About from './Components/About';
import Endpoint_Constants  from './Constants/endpoint-constants'

export default class App extends Component {
  landingPage = [
    {
      url: Endpoint_Constants.topHeadlines.url,
      title: "Top Headlines",
      component: News,
      path: "/",
      pageSize: 6,
      exact: true
    },
    {
      url: Endpoint_Constants.sports.url,
      title: "Sports",
      component: News,
      path: "/sports",
      pageSize: 6,
      exact: true
    },
    {
      url: Endpoint_Constants.business.url,
      title: "Business",
      path: "/business",
      component: News,
      pageSize: 6,
      exact: true
    },
    {
      url: Endpoint_Constants.entertainment.url,
      title: "Entertainment",
      component: News,
      path: "/entertainment",
      pageSize: 6,
      exact: true
    },
    {
      url: Endpoint_Constants.science.url,
      title: "Science",
      component: News,
      path: "/science",
      pageSize: 6,
      exact: true
    },
    {
      url: Endpoint_Constants.tech.url,
      title: "Technology",
      component: News,
      path: "/technology",
      pageSize: 6,
      exact: true
    },
    {
      url: Endpoint_Constants.general.url,
      title: "General",
      component: News,
      path: "/general",
      pageSize: 6,
      exact: true
    },
    {
      url: Endpoint_Constants.health.url,
      title: "Health",
      component: News,
      path: "/health",
      pageSize: 6,
      exact: true
    },
    {
      url: "",
      title: "About Us",
      component: About,
      path: "/about",
      pageSize: 0,
      exact: true
    }
  ]
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            {this.landingPage.map((item) => {
              return (
                <Route key={item.url} exact={item.exact} path={item.path} element={<item.component key={item.path.slice(1)} title={item.title} pageSize={item.pageSize} url={item.url} />} >
                </Route>
              )
            })}
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
