import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

export const Div1 = styled.div`
    color: White;
    font-size: 18px;
    background-color: black;
`;

 function PrecticeFile() {

    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `You clicked ${count} timnes`;
        // console.log(document.title)
    })

    return (
        <Div1>
            <p>Your click count is: </p><h1>{count}</h1>
                <button onClick={() =>  setCount(count + 1)}>
                    Click Me
                </button>
        </Div1>
    )
}

export default PrecticeFile;
