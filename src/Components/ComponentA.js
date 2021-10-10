import React, {useEffect} from 'react';

let renderCount = 1;

const ComponentA = (props) => {

    useEffect(() => {
        renderCount++;
    });

    return (
        <div>
            <h2>ComponentA: render {renderCount} times {props.count !== null ? `|| Counter: ${props.count}` : null}</h2>
        </div>
    )

}

ComponentA.defaultProps = {
    count: null
}

export default ComponentA;