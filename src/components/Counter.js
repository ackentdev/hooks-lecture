import React, {useState, useEffect} from 'react';

export default function Counter(){

    const [count, setCount] = useState(0);
    const [favFruit, setfavFruit] = useState('');
    useEffect(() => {
        document.title = `Your favorite fruit is ${favFruit}`
    }, [favFruit])
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click Me
            </button>
            <p>My favorite fruit is {favFruit}</p>
            <input type="text" placeholder="Please type in your favorite fruit" onChange={(e) => setfavFruit(e.target.value)}></input>
        </div>
    )
}