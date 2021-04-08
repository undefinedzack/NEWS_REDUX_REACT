import {useSelector} from "react-redux";
import NewsCard from "./NewsCard";

const BookmarkedNews = () => {
  const news = useSelector(state => state.news.pinned)

  if (Object.keys(news).length !== 0) {
    return (
      <>

        <div className={'container mt-4'}>
          <div className={'row'}>
            <div className={'col-12 text-center'}>
              <p style={{fontSize: '35px', color: '#a263ff'}}>Saved Ones!</p>
            </div>
          </div>
          <div className={'row'}>
            {
              news.map((article) => {
                return (
                  <>
                    <div className={'col-3 mt-2'}>
                      <NewsCard article={article}/>
                    </div>
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

export default BookmarkedNews