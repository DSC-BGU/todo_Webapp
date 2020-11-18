import React, { Component } from 'react';


class AddTodo extends Component {
    state={
        title: ""
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:""});
    }

    onChange = (e) => this.setState({title: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input
                    type="text"
                    name="title"
                    value = {this.state.title}
                    onChange = {this.onChange}
                    style={{flex: '10', padding:'5px'}}
                    placeholder= "AddTodo..."
                />
                <input
                    type="submit"
                    name="Submit"
                    className="btn"
                    style={{flex:'1'}}
                />
            </form>
        )
    }
}


export default AddTodo;
