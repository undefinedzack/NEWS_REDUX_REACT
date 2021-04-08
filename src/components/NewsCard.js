import { Card, Button } from 'antd';
import { BookOutlined} from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {bookmarkNews} from "../actions";
const { Meta } = Card;

const NewsCard = ({article}) => {
  const dispatch = useDispatch()

  const date = new Date(article.publishedAt).toDateString()

  return (
    <>
      <Card
        hoverable
        style={{borderRadius: '15px'}}
        cover={<img className={'shadow'} style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}
                    alt="example" src={article.urlToImage}/>}
      >
        <Meta
          title={
              <a href={article.url}>
                {article.title}
              </a>
          }
          description={article.description}
        />
        <div className={'row mt-4'}>
          <div className={'col-12'}>
            <div dangerouslySetInnerHTML={{__html: article.author}} />
          </div>
          <div className={'col-12'}>
            {date}
          </div>
        </div>

        <div className={'row mt-4'}>
          <div className={'col-3 offset-7'}>
            {/*<p style={{color: '#df70ff', fontSize: '18px'}}>Save</p>*/}
          </div>
          <div className={'col-2'}>
            <Button type="default" shape="circle" icon={<BookOutlined/>} size='default' onClick={() => {
              dispatch(bookmarkNews(article))
              window.alert('saved')
            }}/>

          </div>
        </div>

      </Card>
    </>
  )
}

export default NewsCard