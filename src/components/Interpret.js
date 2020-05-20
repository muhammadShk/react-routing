import React from 'react';

function Interpret(props){
    const word = "The Word is : "+ props.id;
    const num = "The Number is : "+ props.id;

    return(
        <>
            {
                isNaN(+props.id)?
                <p>{word}</p>:
                <p>{num}</p>
            }
        </>
    )
}

export default Interpret;