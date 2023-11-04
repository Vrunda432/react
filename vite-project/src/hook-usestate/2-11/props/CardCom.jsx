import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function CardCom(props) {
  return (
    <div><Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Sample"
      src="https://picsum.photos/300/200"
    />
    <CardBody>
      <CardTitle tag="h5">
        {props?.name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        
        {props?.price}
      </CardSubtitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        
       discountPercentage={props?.dics}
      </CardSubtitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        
       After discount ={props.price- props.after}
      </CardSubtitle>
      <CardText>
       {props?.description}
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card></div>
  )
}
