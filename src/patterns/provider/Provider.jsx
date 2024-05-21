import { createContext, useCallback, useContext, useReducer } from "react";
import PropTypes from 'prop-types';

const ProviderPattern = () => {
    return <>
        <h2>Provider Pattern</h2>
        <Provider>
            <DisplayState />
            <AddNewRandomValue />
        </Provider>
    </>
}

const ProviderContext = createContext(null);

const initialValue = []

const ADD = 'ADD';

const reducer = (prevState, action) => {
    switch (action.type) {
        case ADD:
            return [...prevState, action.payload];
        default:
            return [...prevState]
    }
}

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const addNewObject = useCallback((newObject) => {
        dispatch({
            type: ADD,
            payload: newObject
        })
    }, [dispatch])

    return <ProviderContext.Provider value={{ state, addNewObject }}>{children}</ProviderContext.Provider>
}

const DisplayState = () => {
    const { state } = useContext(ProviderContext);

    return state.map((element, index) => <p key={index}>{element.value}</p>)
}

const AddNewRandomValue = () => {
    const { addNewObject } = useContext(ProviderContext);

    return <button onClick={() => addNewObject({ id: 'test', value: 'new user' })}>Add test value</button>
}

Provider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
}

export default ProviderPattern;