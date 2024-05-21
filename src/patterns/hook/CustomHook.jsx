import { useState } from "react";

const CustomHook = () => {
    const [counter, onClick] = useCounter();

    return <>
        <h2>Hooks pattern</h2>
        <p>Counter: {counter}</p>
        <button onClick={onClick}>Increase by 2</button>
    </>
}

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const onClick = () => {
        setCounter(prevState => {
            if (prevState + 2 > 10) {
                return 0;
            } else {
                return prevState + 2;
            }
        });
    };

    return [counter, onClick];
}

export default CustomHook;