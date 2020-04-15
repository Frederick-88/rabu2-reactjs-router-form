import React from 'react';
import {Button} from 'react-bootstrap'

const ButtonSuccess = (props) => {
    return (
        <Button variant="success">{props.children}{props.name}</Button>
    )
}

export default ButtonSuccess;

{/* <ButtonSuccess>YES!</ButtonSuccess> */}