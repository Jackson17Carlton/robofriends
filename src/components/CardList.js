import React from 'react';
import Card from './Card';

// CardList - Functional Component - Loops through list of robots and maps a robot to
// a Card Component
const CardList = ({ robots }) => {
    // Map each item in an array to a Card component (takes a callback function)
    const renderRobots = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
            />
        )
    })
    return (
        <div>
            {renderRobots}
        </div>
    )
}

export default CardList;