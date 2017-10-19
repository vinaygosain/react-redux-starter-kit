import React from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Welcomes you."
        }
    }

    render() {
        return (
            <div>{this.state.title}</div>
        );
    };
}

export default App;
