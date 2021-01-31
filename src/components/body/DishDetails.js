import React from 'react';
import LoadComment from './LoadComment';
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

const DishDetails = props => {
    let label = null;
    if(props.dish.label !== ""){
        label = <CardText><b>Label: </b>{props.dish.label}</CardText>
    }
    return (
        <div>
            <Card>
                <CardBody>
                    <CardImg src={props.dish.image} alt={props.dish.name}/>
                    <CardTitle><h2>{props.dish.name}</h2></CardTitle>
                    <CardText><b>Category: </b>{props.dish.category}</CardText>
                    {label}
                    <CardText><b>Price: </b>{props.dish.price} $</CardText>
                    <CardText>{props.dish.description}</CardText>

                    {/* Comment */}
                    <LoadComment comments={props.dish.comments} />

                </CardBody>
            </Card>
        </div>
    )
}
export default DishDetails;