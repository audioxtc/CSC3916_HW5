import React, { Component} from 'react';
import { leaveReview, setMovie } from '../actions/movieActions';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

class ReviewForm extends Component {

    constructor(props){
        super(props);

        this.updateDetails = this.updateDetails.bind(this);
        this.review = this.review.bind(this);
        this.state = {
            details:{
                rating: '',
                username: '',
                quote: '',
                movietitle: ''
            }
        };
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);
        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    review(){
        const {dispatch} = this.props;
        this.state.details.movietitle = this.props.selectedMovie.title;
        dispatch(leaveReview(this.state.details));
    }

    render(){
        return (
            <Form className='form-horizontal'>
                <Form.Group controlId="rating">
                    <Form.Label>Your rating</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.rating} type="text" placeholder="rating from 1-5 stars" />
                </Form.Group>

                <Form.Group controlId="username">
                    <Form.Label>User</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.props.username} type="email" placeholder="username" />
                </Form.Group>

                <Form.Group controlId="quote">
                    <Form.Label>Review:</Form.Label>
                    <Form.Control onChange={this.updateDetails} value={this.state.details.quote}  type="text" placeholder="your review here" />
                </Form.Group>
                <Button onClick={this.review}>Submit</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movie.selectedMovie,
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(ReviewForm);