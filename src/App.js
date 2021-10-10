import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, {useEffect, useReducer} from "react";
import {ListGroup, ListGroupItem, Badge} from 'reactstrap';

const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const initialState = {
    loading: true,
    error: '',
    todos: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                loading: false,
                error: '',
                todos: action.payload
            };
        case 'SET_ERROR':
            return {
                loading: false,
                error: 'There are some errors',
                todos: []
            }
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get(apiURL)
            .then(response => {
                dispatch({type: 'SET_DATA', payload: response.data});
            })
            .catch(error => {
                dispatch({type: 'SET_ERROR'});
            })
    }, []);
    const listMarkup = (<ListGroup>
        {state.todos.map(todo => (
            <ListGroupItem key={todo.id}>
                {todo.title} {todo['completed'] ? (<Badge style={{color: 'black'}} color="success">Completed</Badge>) :
                (<Badge style={{color: 'black'}} color="danger">Incomplete</Badge>)} </ListGroupItem>)
        )}
    </ListGroup>);

    return (
        <div className="App">
            {state.loading ? 'Loading' : state.error ? state.error : listMarkup}
        </div>
    );
}

export default App;
