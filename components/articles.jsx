import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import style from '../styles/style';
import mediaObject from '../styles/mediaObject';
import { capitalizeFirstLetter, addState, makeTitle } from '../helpers/helpers';
import Flex from 'jsxstyle/Flex';

const { questrial } = style;
const {mediaObjectItem} = mediaObject;

const MediaObjectsList = ({articles}) => (
    <ul style={{...questrial, ...{marginTop: "1.5rem"}}}>
      {articles.map(({id, title, date, image, category}) => (
        <li key={id} id={id}
            onMouseEnter={()=> console.log('enter')}
            onMouseLeave={()=> console.log('leave')}>
          <Link to={`/articles/${id}`} style={{display:"flex", textDecoration: "none", color: "black", padding: "1.5rem"}}>
            <img src={image}
              style={{width: 150, height: 150, objectFit:"cover"}}
              onLoad={()=> console.log('image was loaded')}
              onError={()=> console.log('error')}/>
            <div style={{maxWidth: "calc(100% - 150px)"}}>
              <h2 style={style.title}>{title}</h2>
              <div style={{display: "flex"}}>
                <h3>{date}</h3> |
                <h3>{category}</h3>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
);

export class Articles extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {

    fetch('/data/articlesList.json')
      .then(response =>
        response.ok ? response.json() : console.log("Response was not ok!"))
      .then(data => addState(data, {hovered: false, imageHasLoaded: false}))
      .then((data)=> this.setState({articles: data}))
      // .then(()=> console.log("articles:" + this.state.articles))
      .catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));

    console.log(`${this.constructor.name} did mount`);
  }

  render() {
    const articlesRaw = this.state.articles;
    const result = articlesRaw
                    .sort((a,b) =>
                      (new Date(b.date)) - (new Date(a.date)))
                    .map((article) =>
                      article && {...article,
                                  ...{title: makeTitle(article.id)},
                                  ...{image: `assets/images/${article.id}-thumb.${article.imageFormat}`},
                                  ...{date: new Date(article.date).toLocaleDateString()}
                                }
                    );
                    // console.log(result);
    return (
        <MediaObjectsList articles={result}/>
    )
  }
}
