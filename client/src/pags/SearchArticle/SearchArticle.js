import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Input, FormBtn, Lable } from '../../components/Form';
import { Col, Row, Container } from "../../components/Grid";
// import { DisplayArticle } from "../../pags/DisplayArticle";
import { ArticleList, ArticleListItem } from "../../components/ArticleList";
import API from '../../utils/API';
class SearchArticle extends Component {
    state = {
        articles: [{
            key:"fhsf76786876fs8",
            title:"A Viewer’s Guide to Donald Trump",
            href:"https://www.nytimes.com/2018/04/09/magazine/donald-trump-rallies-campaigning-president.html",
            
        },
        {
            key:"78979879998",
            title:"A Viewer’s Guide to Donald Trump",
            href:"https://www.nytimes.com/2018/04/09/magazine/donald-trump-rallies-campaigning-president.html",
           
        },
        {
            key:"hudsyowejbuew9999999u",
            title:"A Viewer’s Guide to Donald Trump",
            href:"https://www.nytimes.com/2018/04/09/magazine/donald-trump-rallies-campaigning-president.html",
            
        }],
        serchTerm: "trump",
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
        event.preventDefault();
        API.getArticle(this.state.serchTerm)
         .then(res => this.setState({articles:this.state.articles}))
         .catch(err => console.log(err))
    }
    handleFormSave = (event) =>{
        event.preventDefault();
        console.log(event.target.attributes.getNamedItem('data').value);
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
