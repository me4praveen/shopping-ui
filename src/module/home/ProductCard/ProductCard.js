import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard(props) {
    return (
        <Card className = "product-card">
            <Card.Header>{props.name}</Card.Header>
            <Card.Body>
                <Card.Img src = { props.img}></Card.Img>
                <Card.Text>
                    {props.model}
                    <span className="row">
                        <span className="col">{props.type} {props.subtype}</span>
                        <span className="col"><b>{props.sym}{props.price}</b></span>
                    </span>
                </Card.Text>
            </Card.Body>
        <Card.Footer>
            <Button onClick = { () => { } }>Add</Button>
        </Card.Footer>
        </Card>
     
    )
}

export default ProductCard;