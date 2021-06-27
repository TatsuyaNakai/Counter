import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Counter=()=>{
    let [num, btnclick]=React.useState(0);

    return (
        <div className="container">
            <h1>カウンター</h1>
            <p>{num}</p>
            <div className="btnArea">
                <button onClick={()=>btnclick(num+1)}>+</button>
                <button onClick={()=>btnclick(num-1)}>-</button>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);