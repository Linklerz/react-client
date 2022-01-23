import React from "react";
import './App.css';

class App extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
"https://linklerz-api.cleverapps.io/api/links/sid86_")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1> {
                items.map((item) => (
                <ol key = { item.id } >
                    Name: { item.name },
                    Url : { item.url },
                    </ol>
                ))
            }
        </div>
    );
}
}

export default App;
