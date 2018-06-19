import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Input, FormBtn, Lable } from '../../components/Form';
import { Col, Row, Container } from "../../components/Grid";
// import { DisplayArticle } from "../../pags/DisplayArticle";
import { ArticleList, ArticleListItem } from "../../components/ArticleList";

class SearchArticle extends Component {
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
        }],
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
    }
    handleFormSearch = (event) => {
        
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
                                    name="term"

                                />
                                <Lable value="Number of Records to Retrive :" />
                                <Input
                                    value={this.state.NumOfRecords}
                                    onChange={this.handleInputChange}
                                    name="records"

                                />
                                <Lable value="Start Year (Optional):" />
                                <Input
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange}
                                    name="startYear"

                                />
                                <Lable value="End Year (Optional):" />
                                <Input
                                    value={this.state.endDate}
                                    onChange={this.handleInputChange}
                                    name="endYear"

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
                                                    onBtnClick={this.onSaveClick}
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
