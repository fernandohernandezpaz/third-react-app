import React, {useEffect} from 'react';

let renderCount = 1;

const ComponentB = (props) => {

    useEffect(() => {
        renderCount++;
    });

    return (
        <div>
            <h2>ComponentB: render {renderCount} times {props.count !== null ? `|| Counter: ${props.count}` : null}</h2>
        </div>
    )

}

ComponentB.defaultProps = {
    count: null
}

export default ComponentB;