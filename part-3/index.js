const Person = ({ name, age, hobbies }) => {
    const longName = name.length > 8;
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>This person's name is {longName ? name.slice(0, 6) + "..." : name}</p>
            <h3>{age >= 18 ? "Please go vote!" : "you must be 18"}</h3>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}


const App = () => (
    <div>
        <Person name="Phoenixaroni" age={27} hobbies={['music', 'art', 'dance']} />
        <Person name="Eric" age={32} hobbies={['music', 'wood working', 'disc golf']} />
        <Person name="Fable" age={0.5} hobbies={['eatting', 'playing', 'purring']} />
    </div>
)

ReactDOM.render(<App />,
    document.getElementById("root")); 