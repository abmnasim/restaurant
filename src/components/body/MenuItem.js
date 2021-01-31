import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

const MenuItem = props => {
    return (
        <div>
            <Card style={{margin:"10px"}}>
                <CardBody>
                    <CardImg src={props.dish.image} alt={props.dish.name} style={{opacity:".5"}} />
                    <CardImgOverlay>
                        <CardTitle style={{cursor:"pointer"}} onClick={() => props.selectedDish(props.dish)}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
export default MenuItem;