import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }; // term will hold the users input
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    // Naming Convention: handle or on, name of element, event
    onInputChange(term) {
        this.setState({ term }); // instead of this.setState({ term: term })
        this.props.onSearchTermChange(term); // callback onSearchTermChanged using term as arg
    }
}

export default SearchBar;

// Component has it's own constructor so we're calling the parents method
// State is initialized by creating a new object set as this.state
// this.state is a JSON object with key/value pairs
// ONLY in the constructor do we use this.state = object!!!
// this.state.term = event.target.value; // BAD!!! React can't monitor changes if you do this.


// Users typing:
// 1) setState is run and modifies the 'term' with what the user typed
// 2) this.state.term then points to the new value the user typed
// 3) Finally, the DOM is updated to show this change

// Controlled Component:
// it's value is set by state
// Example: when SearchBar first loads, the value of 'term' is an empty string
// When the user types in the input, the component is re-rendered, the value of 'this.state.term' is now the users input
// If the user types again, the component re-renders, this.state.term changes and the value of the input is set as w/e they last typed
// Constructor -> term: '', input -> value: this.state.term, input -> onChange: state changes (term is equal to what was typed) 