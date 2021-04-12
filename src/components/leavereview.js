import React, { Component } from 'react';
import { fetchMovie } from "../actions/movieActions";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


class LeaveReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write a short review about this film.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An review was submitted: ' + this.state.value);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Quote:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default LeaveReview;