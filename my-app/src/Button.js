import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return "You like this button";
        }

        return <button onClick={() => this.setState({liked: true})}>Like</button>;
    }
}

export default Button;
