import './App.css';
import React, {useState, useMemo, useRef} from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';


function App() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const incrementCountA = () => {
        setCountA(countA + 1);
    }
    const incrementCountB = () => {
        setCountB(countB + 1);
    }
    const memoComponentA = useMemo(() => {
        return (<ComponentA count={countA}/>)
    }, [countA])

    const inputRef = useRef();
    return (
        <div className="App">
            <p>App js Count A: {countA}</p>
            <p>
                <button onClick={() => incrementCountA()}>Increment A</button>
                <button onClick={() => incrementCountB()}>Increment B</button>
            </p>
            {memoComponentA}
            <p></p>
            <ComponentB count={countB}/>
            <br/>
            <input ref={inputRef} type="text"/>
            <input type="text"/>
            <input type="text"/>
            <button onClick={() => {
                inputRef.current.focus()
            }}>Focus</button>
        </div>
    );
}

export default App;
