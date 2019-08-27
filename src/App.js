import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import GoogleReddit from './components/GoogleReddit.js'
import GoogleScholar from './components/GoogleScholar.js'
import PrivateCode from './components/PrivateCode.js'

function Index() {
  return null
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/googlereddit/">Google Reddit</Link>
              </li>
              <li>
                <Link to="/googlescholar/">Google Scholar</Link>
              </li>
              <li>
                <Link to="/privatecode/">Google Code</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/googlereddit/" component={GoogleReddit} />
          <Route path="/googlescholar" component={GoogleScholar} />
          <Route path="/privatecode" component={PrivateCode} />
        </div>
      </Router>
    )
  }
}

export default App
