const Tweet = ({ username, name, date = "3/9/23", message }) => (
    <div>
        <h1> {username} </h1>
        <p>name:{name}</p>
        <p>tweet:{message}</p>
        <p>dated:{date}</p>
    </div>
)


const App = () => (
    <div>
        <Tweet name="Phoenix" username="phoe" message="tweeety tweet" />
        <Tweet name="Eric" username="person-man" message="I am busy" date='3/3/23' />
        <Tweet name="Fable" username="kitten" message="meow" date='3/2/23' />
    </div>
)

ReactDOM.render(<App />,
    document.getElementById("root")); 