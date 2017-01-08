import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import style from '../../styles/style';
import mediaObject from '../../styles/mediaObject';
import { capitalizeFirstLetter, addState, makeTitle } from '../../helpers/helpers';
import Highlight from 'react-highlighter';
const { questrial, backgroundImage } = style;
const {link, imageMo, transition, titleMo} = mediaObject;


// const MediaObjectsList = ({articles, fn1, fn2, selection, filterText}) =>  (
//     <ul style={{...questrial, ...{marginTop: "1.5rem"}}}>
//       {articles.map(({id, title, date, image, category}) => {
//
//         const hover = selection === id;
//         const catStyle = cat => cat === 'alpha' ? 'red' : cat === 'beta' ? 'blue' : 'orange';
//
//       return (
//         <li key={id} id={id}
//             style={hover ? {backgroundColor: catStyle(category)} : {}}
//             onMouseEnter={() => fn1(id)}
//             onMouseLeave={fn2}>
//           <Link to={`/articles/${id}`} style={{...link, ...(hover && {color: 'white'})}}>
//             <img src={image}
//               style={imageMo}
//               onLoad={()=> console.log('image was loaded')}
//               onError={()=> console.log('error')}/>
//             <div style={{...{maxWidth: "calc(100% - 150px)"}, ...(hover && {color: 'white'})}}>
//               <h2 style={titleMo}>{title}</h2>
//               <div style={{display: "flex"}}>
//                 <h3 style={{margin: '0 0.5em'}}>{date}</h3> |
//                 <h3 style={{marginLeft: '0.5em'}}>{category}</h3>
//               </div>
//             </div>
//           </Link>
//         </li>
//       );
//     })}
//     </ul>
// );

const MediaObjectsList = ({articles, fn1, fn2, selection, filterText}) =>  {

        MediaObjectsList2.propTypes = {
          articles: React.PropTypes.array.isRequired,
          fn1: React.PropTypes.func.isRequired,
          fn2: React.PropTypes.func.isRequired,
          selection: React.PropTypes.string,
          filterText: React.PropTypes.string,
        }

        const list =  articles.map(({id, title, date, image, category}) => {
          const hover = selection === id;
          const catStyle = cat => cat === 'alpha' ? 'red' : cat === 'beta' ? 'blue' : 'orange';
          if (title.toLowerCase().indexOf(filterText) !== -1 ||
              category.toLowerCase().indexOf(filterText) !== -1) {
            return (
              <li key={id} id={id}
                  style={hover ? {backgroundColor: catStyle(category)} : {}}
                  onMouseEnter={() => fn1(id)}
                  onMouseLeave={fn2}>
                <Link to={`/articles/${id}`} style={{...link, ...(hover && {color: 'white'})}}>
                  <img src={image}
                    style={imageMo}
                    onLoad={()=> console.log('image was loaded')}
                    onError={()=> console.log('error')}/>
                  <div style={{...{maxWidth: "calc(100% - 150px)"}, ...(hover && {color: 'white'})}}>
                    <h2 style={titleMo}>{title}</h2>
                    <div style={{display: "flex"}}>
                      <h3 style={{margin: '0 0.5em'}}>{date}</h3> |
                      <h3 style={{marginLeft: '0.5em'}}>{category}</h3>
                    </div>
                  </div>
                </Link>
              </li>
            )};
          }).filter(item => item !== undefined);
        return (
          <ul style={{...questrial, ...{marginTop: "1.5rem"}}}>
            {list}
          </ul>
        );

};

const MediaObjectsList2 = ({articles, fn1, fn2, selection, filterText}) =>  {

  MediaObjectsList2.propTypes = {
    articles: React.PropTypes.array.isRequired,
    fn1: React.PropTypes.func.isRequired,
    fn2: React.PropTypes.func.isRequired,
    selection: React.PropTypes.string,
    filterText: React.PropTypes.string,
  };

  const fn = (str, val) => str.replace((new RegExp(val, 'gi')), `<span style="background-color: orange">${val}</span>`);

  const regex = new RegExp(filterText, 'gi');
  const list = articles
    .filter(item => item.title.match(regex) || item.category.match(regex))
    .map(({id, title, date, image, category}) => {

    const hover = selection === id;
    const catStyle = cat => cat === 'alpha' ? 'red' : cat === 'beta' ? 'blue' : 'orange';

      return (
        <li key={id} id={id}
            style={hover ? {backgroundColor: catStyle(category)} : {}}
            onMouseEnter={() => fn1(id)}
            onMouseLeave={fn2}>
          <Link to={`/articles/${id}`} style={{...link, ...(hover && {color: 'white'})}}>
            <img src={image}
              style={imageMo}
              onLoad={()=> console.log('image was loaded')}
              onError={()=> console.log('error')}/>
            <div style={{...{maxWidth: "calc(100% - 150px)"}, ...(hover && {color: 'white'})}}>
              <h2 style={titleMo} dangerouslySetInnerHTML={{__html: fn(title, filterText)}}/>
              <div style={{display: "flex"}}>
                <h3 style={{margin: '0 0.5em'}}>{date}</h3> |
                <h3 style={{marginLeft: '0.5em'}} dangerouslySetInnerHTML={{__html: fn(category, filterText)}}/>
              </div>
            </div>
          </Link>
        </li>
      );
    })
  return (
    <ul style={{...questrial, ...{marginTop: "1.5rem"}}}>
      {list}
    </ul>
  );
};


const MediaObjectsList3 = ({articles, fn1, fn2, selection, filterText}) =>  {

  MediaObjectsList2.propTypes = {
    articles: React.PropTypes.array.isRequired,
    fn1: React.PropTypes.func.isRequired,
    fn2: React.PropTypes.func.isRequired,
    selection: React.PropTypes.string,
    filterText: React.PropTypes.string,
  };

  const regex = new RegExp(filterText, 'gi');
  const list = articles
    .filter(item => item.title.match(regex) || item.category.match(regex))
    .map(({id, title, date, image, category}) => {

    const hover = selection === id;
    const catStyle = cat => cat === 'alpha' ? 'red' : cat === 'beta' ? 'blue' : 'orange';

      return (
        <li key={id} id={id}
            style={hover ? {backgroundColor: catStyle(category)} : {}}
            onMouseEnter={() => fn1(id)}
            onMouseLeave={fn2}>
          <Link to={`/articles/${id}`} style={{...link, ...(hover && {color: 'white'})}}>
            <img src={image}
              style={imageMo}
              onLoad={()=> console.log('image was loaded')}
              onError={()=> console.log('error')}/>
            <div style={{...{maxWidth: "calc(100% - 150px)"}, ...(hover && {color: 'white'})}}>
              <h2 style={titleMo}>
                <Highlight search={filterText} matchStyle={{backgroundColor: 'orange'}}>{title}</Highlight>
              </h2>
              <div style={{display: "flex"}}>
                <h3 style={{margin: '0 0.5em'}}>{date}</h3> |
                <h3 style={{marginLeft: '0.5em'}}>
                  <Highlight search={filterText} matchStyle={{backgroundColor: 'orange'}}>{category}</Highlight>

                </h3>
              </div>
            </div>
          </Link>
        </li>
      );
    })
  return (
    <ul style={{...questrial, ...{marginTop: "1.5rem"}}}>
      {list}
    </ul>
  );
};


const SearchForm = ({value, onChange}) => {

    SearchForm.propTypes = {
      value: React.PropTypes.string.isRequired,
      onChange: React.PropTypes.func.isRequired,
    };

    return (
      <form>
        <input type="text"
               value={value}
               onChange={onChange}/>
      </form>
   );
};

class ArticlesContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      selection: '',
      value: '',
    }

    this.handleMouseEnter = ::this.handleMouseEnter;
    this.handleMouseLeave = ::this.handleMouseLeave;
    this.handleChangeEvent = ::this.handleChangeEvent;
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

  handleMouseEnter(val) {
    this.setState({selection: val});
  }

  handleMouseLeave() {
    this.setState({selection: null});
  }

  handleChangeEvent(e) {
    this.setState({value: e.target.value});
  }

  render() {
    const articlesRaw = this.state.articles;
    const articlesResult = articlesRaw
                    .sort((a,b) =>
                      (new Date(b.date)) - (new Date(a.date)))
                    .map((article) =>
                      article && {...article,
                                  ...{title: makeTitle(article.id)},
                                  ...{image: `assets/images/${article.id}-thumb.${article.imageFormat}`},
                                  ...{date: new Date(article.date).toLocaleDateString()}
                                }
                    );

    return (
        <div>
          <SearchForm value={this.state.value}
                      onChange={this.handleChangeEvent}/>
          <MediaObjectsList3 articles={articlesResult}
                            fn1={this.handleMouseEnter}
                            fn2={this.handleMouseLeave}
                            selection={this.state.selection}
                            filterText={this.state.value}/>
        </div>
    )
  }
}

export default ArticlesContainer;
