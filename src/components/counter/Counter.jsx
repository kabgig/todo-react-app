import { useState } from 'react';
import { PropTypes } from 'prop-types';
import './Counter.css'

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count + by)
    }

    return (
        <div>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementCounterParentFunction={incrementCounterParentFunction}/>
            <CounterButton by={2} incrementCounterParentFunction={incrementCounterParentFunction}/>
            <CounterButton by={5} incrementCounterParentFunction={incrementCounterParentFunction}/>
        </div>
    )
}

function CounterButton({ by, incrementCounterParentFunction }) {

    const [count, setCount] = useState(0);

    function incrementCounterFunction() {
        setCount(count + by)
        incrementCounterParentFunction(by)
    }
    function decrementCounterFunction() {
        setCount(count - by)
        incrementCounterParentFunction(-by)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}
                >+{by}</button>
                <button className="counterButton"
                    onClick={decrementCounterFunction}
                >-{by}</button>
            </div>
        </div>
    )

}
CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}