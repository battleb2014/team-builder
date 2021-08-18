import React from 'react';

const Member = props => {
    const { info } = props;

    if(!info) {
       return <h3>Fetching the members list...</h3>
}
    
    return (
    <div className = 'member-container'>
        <h2>{ info.username }</h2>
        <p>Email: { info.email }</p>
        <p>Role: { info.role }</p>
    </div>
    )
}

export default Member;