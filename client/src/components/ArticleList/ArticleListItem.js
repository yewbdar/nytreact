import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import  {FormBtn}  from "../Form";


export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
 
      <div className="row">
        <div className="col-lg-10">
        {props.article.title}<br />
        {props.article.href}<br />
        {props.article.article}<br />
        </div>
        <div className="col-lg-2"> 
        <FormBtn  onClick={props.onBtnClick} data={props.key} >{props.btnName}</FormBtn></div>
      </div>
      {/* <Row>
        <p>
          <h3><a rel="noreferrer noopener" target="_blank" href={props.href}>
         
          </a></h3></p>
          <p>article: {props.article}</p>
          <Col size="md-5"/>
         
          
      </Row> */}
    </Container>
  </li>
);
