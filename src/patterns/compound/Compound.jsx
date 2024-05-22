import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"

const Compound = () => {

    return <>
        <h2>Compound pattern</h2>
        <ExpandedElement>
            <ExpandedElement.Toggle />
            <ExpandedElement.Text />
        </ExpandedElement>
    </>
}

const ExpandedElementContext = createContext(null);

const ExpandedElement = ({ children }) => {
    const [open, toggle] = useState(false);

    return <ExpandedElementContext.Provider value={{ open, toggle }}>{children}</ExpandedElementContext.Provider>
}

ExpandedElement.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

const Toggle = () => {
    const { open, toggle } = useContext(ExpandedElementContext);

    return <button type="button" onClick={() => toggle(!open)}>Toggle</button>
}

ExpandedElement.Toggle = Toggle;

const Text = () => {
    const { open } = useContext(ExpandedElementContext);

    return open ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo in, quae dolorum, sequi cumque laudantium velit necessitatibus, non mollitia unde sed veritatis. Rerum, natus aut ea asperiores repellat iusto! Rem.</p> : null
}

ExpandedElement.Text = Text;


export default Compound;