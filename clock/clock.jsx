class Clock extends React.Component {
    constructor(props) {
        super(props);
        console.log("clock constructed");
        this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log("component did mount");
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log("component will unmount");
        clearInterval(this.timerID);
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return <div>
                 <h1>hello world</h1>
                 <h2>it is {this.state.date.toLocaleTimeString()}</h2>
               </div>;
    }
}

const root = document.getElementById("root")
ReactDOM.render(
    <Clock/>,
    root
)
