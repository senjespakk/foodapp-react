import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardHeader, CardTitle } from 'reactstrap';


function RenderComments({comments}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return(
                        <li key={comment.id}>
                            <p>{comment.author}---{new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            <p>{comment.comment}</p>
                            <hr/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
 
}

function RenderDishSelected ({dish}) {
    return(
        <div key={dish.id} class="col-12 col-md-5 m-1">
            <Card>
                <CardImg with="100%" object src={dish.image}/>
                <CardTitle className="m=o">{dish.name}</CardTitle>
                <CardBody>{dish.description}</CardBody>
            </Card>
        </div>
    );
}

function DishDetails(props) {
    return(
        <div className="container">
            <div className="row">
                <RenderDishSelected dish={props.dish}/>
                <RenderComments comments={props.comments}/>
            </div>
        </div>
    );
}

export default DishDetails;