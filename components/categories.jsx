import React from 'react';
import {Link, Match} from 'react-router';
import style from '../styles/style';
import { capitalizeFirstLetter, makeTitle } from '../helpers/helpers';

// const Topics = () => (
//   <div>
//     <h2>Topics</h2>
//   </div>
// );

const {questrial, innerContainer, title} = style;

const Topics2 = ({pathname, pattern})  => (
  <div style={questrial}>
    <h2 style={title}>Topics</h2>
      <ul style={{marginBottom: "0.5em"}}>
        <li>
          <Link to={`${pathname}/alpha`}>Topic1</Link>
        </li>
        <li>
          <Link to={`${pathname}/beta`}>Topic2</Link>
        </li>
        <li>
          <Link to={`${pathname}/gamma`}>Topic3</Link>
        </li>
      </ul>

      <Match pattern={`${pathname}/:Id`} component={Topic} />
      <Match pattern={pathname} exactly render={()=> (
        <h3>Choose</h3>
      )} />
  </div>
)

class Categories extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      selection: '',
    };
  }

  componentDidMount() {
    fetch('/data/articlesList.json')
      .then(response =>
      response.ok ? response.json() : console.log("Response was not ok!"))
      .then(data => this.setState({articles: data}))
      .catch(error => console.log('Fetch error: ' + error.message));

    console.log(`${this.constructor.name} did mount`);
  }

  render(){
    const {pathname} = this.props;
    const categories = this.state.articles
      .map(item => item.category)
      .filter((item, i, arr) => arr.indexOf(item) === i)
      .map(item => (
        <li key={item}>
          <Link  to={`${pathname}/${item}`}>{capitalizeFirstLetter(item)}</Link>
        </li>
      ))

    return (
      <div style={questrial}>
          <ul style={{marginBottom: "0.5em"}}>
            {categories}
          </ul>

          {/* <Match pattern={`${pathname}/:categoryId`}  component={Topic} /> */}
          <Match pattern={`${pathname}/:categoryId`}  render={({params}) =>
            <Topic params={params} list={this.state.articles}/>} />

          <Match pattern={pathname} exactly render={()=> (
            <h3>Choose</h3>
          )} />
      </div>
    )
  }
}

const Topic = ({ params, list }) => {
  const filtered = list
    .filter(item => item.category === params.categoryId)
    .map(item => (
      <li key={item.id}>
        <Link to={`/articles/${item.id}`}>
          <h2>{makeTitle(item.id)}</h2>
        </Link>
      </li>
    ));

  console.table(list.filter(item => item.category === params.categoryId));
  
  return (
    <div>
      <h3 style={{fontSize: "2rem"}}>{params.categoryId}</h3>
      <ul>
        {filtered}
      </ul>
    </div>

)};


export default Categories;
