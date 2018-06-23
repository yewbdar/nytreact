import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import  {FormBtn}  from "../Form";


export const ArticleListItem = (props) => (
  <li className="list-group-item">
    <Container>
      <div className="row" key={props.article.articleId}>
        <div className="col-lg-10">
        <a href={props.article.url}><h1>{props.article.headline}</h1></a><br/>
        <h3>{props.article.snippet}</h3><br />
        {props.article.article}<br />
        </div>
        <div className="col-lg-2"> 
        <FormBtn  onClick={props.onBtnClick} data-article-id={props.article.articleId} >{props.btnName}</FormBtn></div>
      </div>
      
    </Container>
  </li>
);
