import React from 'react';
import {Link, Match} from 'react-router';
import style from '../styles/style'

// const Topics = () => (
//   <div>
//     <h2>Topics</h2>
//   </div>
// );

const {questrial, innerContainer, title} = style;

const Topics = ({pathname, pattern})  => (
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

const Topic = ({ params }) => (
  <div>
    <h3 style={{fontSize: "2rem"}}>{params.Id}</h3>
  </div>
)

export default Topics;
