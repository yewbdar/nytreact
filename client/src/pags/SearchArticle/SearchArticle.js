import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Input, FormBtn, Lable } from '../../components/Form';
import { Col, Row, Container } from "../../components/Grid";
// import { DisplayArticle } from "../../pags/DisplayArticle";
import { ArticleList, ArticleListItem } from "../../components/ArticleList";
import API from '../../utils/API';
class SearchArticle extends Component {
    state = {
        articles:[],
        dataForSave:{},
        serchTerm: "",
        NumOfRecords: "5",
        startDate: "",
        endDate: ""
    };
    handleInputChange = (event)=> {
        const {name , value} = event.target
        this.setState({
            [name]:value
        });
        console.log("article save clicked" ,name , value);
    };
    searchGiphy = query => {
        API.search(query)
          .then(res => this.setState({ results: res.data.data }))
          .catch(err => console.log(err));
      };
    handleFormSearch = (event) => {
        console.log(this.state.serchTerm);
        event.preventDefault();
        API.getArticle(this.state.serchTerm)
          .then((results) => this.setState({articles:results.data}))
        //  .then((results)=>{
        //      console.log(results.data);
        //  })
        .catch(err => console.log(err))
        // console.log(this.state.serchTerm);
    }
    handleFormSave = (event) =>{
        event.preventDefault();
        let id = event.target.getAttribute("data-article-id");
        // console.log(this.state.articles, id);
        let selectedArticle = this.state.articles.filter(function (item) {
            return item.articleId === id;
        })[0];
        this.setState(
                          (prevState)=>({...prevState,
                                dataForSave:{
                                                articleId:selectedArticle.articleId,
                                                title:selectedArticle.headline,
                                                date:selectedArticle.date,
                                                url:selectedArticle.url
                                            }
                                }),
                                ()=>{ API.SaveArticle(this.state.dataForSave)}
                    );
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                            <Jumbotron />
                            <form>
                                <Lable value="Search Term:" />
                                <Input
                                    value={this.state.serchTerm}
                                    onChange={this.handleInputChange}
                                    name="serchTerm"
                                />
                                <Lable value="Number of Records to Retrive :" />
                                <Input
                                    value={this.state.NumOfRecords}
                                    onChange={this.handleInputChange}
                                    name="NumOfRecords"
                                />
                                <Lable value="Start Year (YYYY-MM-DD format) :" />
                                <Input
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange}
                                    name="startDate"
                                />
                                <Lable value="End Year (YYYY-MM-DD format):" />
                                <Input
                                    value={this.state.endDate}
                                    onChange={this.handleInputChange}
                                    name="endDate"
                                />
                                <FormBtn onClick={this.handleFormSearch}>
                                    Search
                                </FormBtn>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                    <Col size="md-1" />
                        <Col size="md-10">
                            {!this.state.articles.length ? (
                                <h1 className="text-center">No Article to Display</h1>
                            ) : (
                                    <ArticleList>
                                        {this.state.articles.map(article => {
                                            return (
                                                <ArticleListItem
                                                    article={article}
                                                    btnName="Save"
                                                    onBtnClick={this.handleFormSave}
                                                />
                                            );
                                        })}
                                    </ArticleList>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SearchArticle;
