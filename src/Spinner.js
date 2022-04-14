import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    )
}

//default props can be specified in case props aren't being sent in the parent component
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;