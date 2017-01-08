import React from 'react';
import style from '../styles/style';
// import {Link} from 'react-router';
import {Hello} from '../components/hello';
import {About} from '../components/about';
import ArticlesContainer from '../components/containers/articlesContainer';
import Categories from '../components/categories';
import {NoMatch} from '../components/noMatch';
import Animations from '../components/animations';
import Events from '../components/events';
import Footer from '../components/footer';
import InnerContainer from '../components/innerContainer';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import { capitalizeFirstLetter, addState } from '../helpers/helpers';
import { ListItem, ListItemRoot } from '../components/listItem';
import ArticleContainer from '../components/containers/articleContainer';


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: [
        {
            id: "hello",
            hovered: false,
        },
        {
            id: "articles",
            hovered: false,
        },
        {
            id: "categories",
            hovered: false,
        },
        {
            id: "about",
            hovered: false,
        },
        {
            id: "animations",
            hovered: false,
        },
        {
            id: "events",
            hovered: false,
            // hovered: true,
        }
      ],
      didMount: false,
      didUpdate: false,
      articles: [],
    };
    this.handleMouseEnter = ::this.handleMouseEnter;
    this.handleMouseLeave = ::this.handleMouseLeave;
  }


  componentDidMount() {
    this.setState({ didMount: true});
    setTimeout(()=> console.log("after 1000ms"), 1000);
    console.log(`${this.constructor.name} did mount`);
  }

  componentDidUpdate() {
    console.log(`${this.constructor.name} did update`);
    // this.setState({ didUpdate: true});
    // console.log(this.state.navigation)
  }

  handleMouseEnter(e) {
    const updateNavigation = this.state.navigation;
    const updated = updateNavigation.map(obj => {
      return {...obj, ...{hovered: false}}
    }).map(obj =>
        obj.id === e.currentTarget.id ? {...obj, ...{hovered: true}} : obj
    );
    this.setState({navigation: updated});

    // console.log(e.currentTarget.id);
    // this.setState({hovered: true});
  }

  handleMouseLeave(e) {
    const updateNavigation = this.state.navigation;

    const updated = updateNavigation.map(obj =>
        obj.id === e.currentTarget.id ? {...obj, ...{hovered: false}} : obj
    );
    this.setState({navigation: updated});
  }

  render() {
    const {outerContainer, nav, link, href, activeLink, hoverLink} = style;
    // const capitalizeFirstLetter = str =>
    //   str.charAt(0).toUpperCase() + str.slice(1);

  return (
     <BrowserRouter >
       <div className="outerContainer" style={outerContainer}>
         <InnerContainer>
             <ul style={nav}>
               {this.state.navigation.map(({id, hovered}, index) => (
                index !== 0 ? (
                 <ListItem id={id}
                  key={id}
                  hovered={hovered}
                  fn1={this.handleMouseEnter}
                  fn2={this.handleMouseLeave}/>
                ) : (
                 <ListItemRoot id={id}
                  key={id}
                  hovered={hovered}
                  fn1={this.handleMouseEnter}
                  fn2={this.handleMouseLeave}/>
                )))}
             </ul>


           <Match exactly pattern="/" component={Hello}/>
           <Match exactly pattern="/articles" component={ArticlesContainer}/>
           <Match pattern="/categories" component={Categories}/>
           <Match pattern="/about" component={About}/>
           <Match pattern="/animations" component={Animations}/>
           <Match pattern="/events" component={Events}/>

           <Match pattern="/articles/:articleId" component={ArticleContainer}/>

           <Miss component={NoMatch} />


        </InnerContainer>
        <Footer />
       </div>
     </BrowserRouter>
    );
  }
}

export default Container;
