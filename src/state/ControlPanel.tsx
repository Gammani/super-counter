import React from "react";

type PropsType = {
    counter: number | null
    finish: number | null
    changeCounter: (counter: number | null) => void
    changeReset: () => void
}

let ControlPanel = (props: PropsType) => {
    return (
        <div>
            <div>
                <button disabled={props.finish ? true : false}
                        className={props.finish ? "button-next" : ""}
                        onClick={() => {
                            props.changeCounter(props.counter)
                        }}>next
                </button>
                <button disabled={props.finish ? false : true}
                        className={props.counter === 0 ? "button-restart" : ""}
                        onClick={props.changeReset}>reset
                </button>
            </div>
        </div>
    );
}

export default ControlPanel;