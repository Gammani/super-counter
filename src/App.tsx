import React, {useState} from 'react';
import './App.css';
import Counter from "./state/Counter";

function App() {

    let [counter, setCounter] = useState<number | null>(0);
    let [finish, setFinish] = useState<number | null>(null);

    function changeCounter(counter: number | null) {
        if (counter !== null) {
            if (counter < 5) {
                setFinish(null);
                counter++;
                setCounter(counter);
                console.log(counter);
            }
            if (counter === 5) {
                setCounter(null);
                setFinish(5);
                console.log(counter);
            }
        }

    }

    function changeReset() {
        setFinish(null);
        setCounter(0);
    }


    return (
        <div className="App">
            <Counter
                counter={counter}
                finish={finish}
                changeCounter={changeCounter}
                changeReset={changeReset}/>
        </div>
    );
}

export default App;
