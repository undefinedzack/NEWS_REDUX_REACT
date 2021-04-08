import {useDispatch} from "react-redux";
import {fetchNews, fetchNewsSource} from "../actions";
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  const dispatch = useDispatch()

  const onMouseOver = event => {
    const el = event.target
    el.style.color = "#ac68d4"
  }

  const onMouseOut = event => {
    const el = event.target
    let black = "#000000"
    el.style.color = black
  }

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NEWS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNews())
                }}>Top Headlines</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('bbc-news'))
                }}>BBC News</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('abc-news'))
                }}>ABC News</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('cnn'))
                }}>CNN</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('engadget'))
                }}>Engadget</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('espn'))
                }}>ESPN</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('fox-news'))
                }}>Fox News</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('google-news'))
                }}>Google News</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('hacker-news'))
                }}>Hacker News</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('mashable'))
                }}>Mashable</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('ign'))
                }}>IGN</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('mtv-news'))
                }}>MTV News</Link>
              </li>

              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('reddit-r-all'))
                }}>Reddit</Link>
              </li>

              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('techcrunch'))
                }}>TechCrunch</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('the-verge'))
                }}>The Verge</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('vice-news'))
                }}>Vice News</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" onMouseEnter={event => onMouseOver(event)}
                      onMouseOut={event => onMouseOut(event)} onClick={() => {
                  dispatch(fetchNewsSource('wired'))
                }}>Wired</Link>
              </li>


            </ul>
            <Link className="nav-link" to={'/pinned'}>Bookmarked</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar