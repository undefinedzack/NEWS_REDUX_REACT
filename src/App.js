import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//CSS
import 'antd/dist/antd.css'

// Actions
import {fetchNews} from "./actions";

//Components
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import BookmarkedNews from "./components/BookmarkedNews";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/pinned'} exact component={BookmarkedNews} />
        </Switch>
      </Router>
    </>
  )

}

export default App;
