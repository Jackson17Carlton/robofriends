import React from 'react';

// Robohash is an API that generates random robots based on the query parameters in the URL
// Card - Functional Component - Child of Cardlist
const Card = ({ id, email, name }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>RoboFriend {id}</h2>
            <div>
                <img alt='robots' src={`https://robohash.org/${id}?100x100`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

// Have to export components to use in other files
// Default means one thing being exported
export default Card;