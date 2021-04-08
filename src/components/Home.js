import {useSelector} from "react-redux";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useSelector(state => state.news.data)

  if (Object.keys(news).length !== 0) {
    return (
      <>

        <div className={'container mt-4'}>
          <div className={'row'}>
            <div className={'col-12 text-center'}>
              <p style={{fontSize: '35px', color: '#a263ff'}}>{news.articles[0].source.name}</p>
            </div>
          </div>
          <div className={'row'}>
            {
              news.articles.map((article) => {
                return (
                  <>
                    {article.urlToImage &&
                    <div className={'col-3 mt-2'}>
                      <NewsCard article={article}/>
                    </div>
                    }
                  </>
                )
              })
            }
          </div>
        </div>
      </>
    );
  }
  return <></>
}

export default Home