// Within our application, we often want to use the same logic in multiple components. This logic can include applying a certain styling to components, requiring authorization, or adding a global state.

// A Higher Order Component (HOC) is a component that receives another component. The HOC contains certain logic that we want to apply to the component that we pass as a parameter. After applying that logic, the HOC returns the element with the additional logic.

const HigherOrderComponent = () => {
    return <>
        <h2>Higher Order Component</h2>
        <StyledButton />
        <StyledText />
    </>
}

function withStyles(Component) {
    const WithStyles = (props) => {
        const style = { padding: '0.2rem', margin: '1rem' }
        return <Component style={style} {...props} />
    }
    return WithStyles;
}


const Button = () => <button>Click me!</button>
const Text = () => <p>Hello World!</p>

const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)

export default HigherOrderComponent;