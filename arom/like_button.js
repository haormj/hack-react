class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'You click button';
        }

        return React.createElement(
            'button',
            {onClick: () => this.setState({liked: true})},
            'Like'
        );
    }
}

const domContainer = document.getElementById("like_button_container");
ReactDOM.render(
    React.createElement(LikeButton),
    domContainer
);
