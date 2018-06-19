import  React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Col, Row, Container } from "../../components/Grid";
import { ArticleList, ArticleListItem } from "../../components/ArticleList";

class SavedArticles extends Component {
    state = {
        articles: [{
            key:"article.title",
            title:"article.title",
            href:"article.href",
            article:"article.article"
        },
        {
            key:"article.title",
            title:"article.title",
            href:"article.href",
            article:"article.article"
        },
        {
            key:"article.title",
            title:"article.title",
            href:"article.href",
            article:"article.article"
        }]}
        onRemoveClick(event){
            let clickedArticle =  event.target;
            console.log("article remove clicked" + clickedArticle);
        }
    render() {
        return (
            <Container fluid>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                            <Jumbotron   />
                            <Row>
                    
                        <Col size="md-12">
                            {!this.state.articles.length ? (
                                <h1 className="text-center">No Article to Display</h1>
                            ) : (
                                    <ArticleList>
                                        {this.state.articles.map(article => {
                                            return (
                                                <ArticleListItem
                                                    article={article}
                                                    btnName="Remove"
                                                    onBtnClick={this.onRemoveClick}
                                                />
                                            );
                                        })}
                                    </ArticleList>
                                )}
                        </Col>
                    </Row>
              </Col>
               </Row>
            </Container>
        );
    }
}
export default SavedArticles;