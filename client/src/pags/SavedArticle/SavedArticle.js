import  React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Col, Row, Container } from "../../components/Grid";
class SavedArticles extends Component {
    state={
        articles:[]
    }
    render() {
        return (
            <Container fluid>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                            <Jumbotron   />
                    
              </Col>
               </Row>
            </Container>
        );
    }
}
export default SavedArticles;