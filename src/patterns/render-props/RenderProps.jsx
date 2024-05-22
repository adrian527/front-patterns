// Another way of making components very reusable, is by using the render prop pattern. A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

import { useState } from "react"
import PropTypes from "prop-types";

const RenderProps = () => {
    return <>
        <h2>Render Props pattern</h2>
        <Input>
            {
                (value) => (
                    <>
                        <DisplayText value={value} />
                        <DisplayRevertedText value={value} />
                    </>
                )
            }
        </Input>
    </>
}

const Input = ({ children }) => {
    const [state, setState] = useState("test");

    return <>
        <input value={state} onChange={(evt) => setState(evt.target.value)} name="test" />
        {children(state)}
    </>
}

Input.propTypes = {
    children: PropTypes.func
}

const DisplayText = ({ value }) => <p>{value}</p>;
DisplayText.propTypes = {
    value: PropTypes.string
}

const DisplayRevertedText = ({ value }) => <p>{value.split('').reverse().join('')}</p>;
DisplayRevertedText.propTypes = {
    value: PropTypes.string
}


export default RenderProps;