import  React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Col, Row, Container } from "../../components/Grid";
import { ArticleList, ArticleListItem } from "../../components/ArticleList";
import API from '../../utils/API';
class SavedArticles extends Component {
    state = {
        savedArticles: [{
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
            event.preventDefault();
        let id = event.target.getAttribute("data-article-id");
        API.deleteArticle(id)
        .then((results) => this.setState({savedArticles:results}))
       //  .then((results)=>{
        //      console.log(results);
        //  })
        .catch((err) => console.log(err));
        
        }
        componentDidMount(){
            this.loadeData();
        }
    //   componentDidUpdate(){
    //     this.loadeData();
    //   }
        loadeData =()=>{
            console.log("loade data must loade")
          API.getSavedArticle()
        //   .then((results) => this.setState({savedArticles:results}))
         .then((results)=>{
             console.log(results);
             console.log("get saved");
         })
        .catch((err) => console.log(err))
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
                            {!this.state.savedArticles.length ? (
                                <h1 className="text-center">No Article to Display</h1>
                            ) : (
                                    <ArticleList>
                                        {this.state.savedArticles.map(article => {
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