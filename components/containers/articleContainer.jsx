import React from 'react';
import style from '../../styles/style';
import {makeTitle} from '../../helpers/helpers';

const {questrial, title} = style;

// console.log(typeof capitalizeFirstLetter);


const Article = ({article}) => (
  article.body ?
  (<div>
   <h2 style={{...questrial, ...title}}>{article.id && makeTitle(article.id)}</h2>
   <h3>{article.date && (new Date(article.date).toLocaleDateString())}</h3>
   {article.body.map((p, index) => <p key={index.toString()} style={{marginBottom: "0.5em", lineHeight: "1.5"}}>{p}</p>)}
 </div>) :
 (<p>loading...</p>)
);

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // article: {body: ['loading...']},
      article: {},
    }
  };


  componentDidMount() {
    const url = `/data/articles/${this.props.params.articleId}.json`;
    console.log(url);
    fetch(url)
      .then(response =>
        response.ok ? response.json() : console.log("Response was not ok!"))
      // .then(data => addState(data, {hovered: false, imageHasLoaded: false}))
      .then((data)=> this.setState({article: data}))
      .then(()=> console.log("articles:" + this.state.article))
      .catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));

    console.log(`${this.constructor.name} did mount`);
  }


  render() {
    const article = this.state.article;
    return (
      <Article article={article}/>
      // <div>
      //  <h2 style={{...questrial, ...title}}>{makeTitle(this.props.params.articleId)}</h2>
      //  {article.body.map((p, index) => <p key={index.toString()} style={{marginBottom: "0.5em", lineHeight: "1.5"}}>{p}</p>)}
      // </div>
    )
  }
}


export default ArticleContainer;
