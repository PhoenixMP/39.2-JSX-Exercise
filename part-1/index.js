const FirstComponent = (props) => (
    <div>
        <h1> "My very first component" </h1>
    </div>
)

const NamedComponent = ({ name }) => (
    <p>my name is {name}</p>
)


const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Phoenix" />
    </div>
)

ReactDOM.render(<App />,
    document.getElementById("root")); 