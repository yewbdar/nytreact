import  React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Input, FormBtn } from '../../components/Form';

class SearchArticle extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
      };

    render() {
        return (
            <div>
                <Jumbotron></Jumbotron>
              
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
            </div>
        );
    }
}

export default SearchArticle;
