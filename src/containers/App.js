import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// Rule of thumb, if function not a part of React use arrow function
// Smart Component - Component that has state
class App extends React.Component {
    constructor() {
        // Calls the constructor of component
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        // Make this HTTP request
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // Runs everytime there was an event in the SearchBox
    // When search field state is updated, app is re-rendered so filtered
    // list is displayed
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredBots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchField={searchfield} searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredBots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;

