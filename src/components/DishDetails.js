import React, { Component }from "react";
import { Card, CardBody, CardImg, CardTitle, Row, Col, Button } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        this.props.resetFeedbackForm()
    }


    render() {
        return(
            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                    <Col>
                        <Control.select className="form-control" model=".rating" name="rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col>
                        <Control.text className="form-control" model=".author" id="author" name="author"
                            placeholder="Author's name" 
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col>
                        <Control.textarea className="form-control" model=".comment" id="comment" name="comment"
                            placeholder="Comment..." 
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col><Button type="submit" color="danger">Submit</Button></Col>
                </Row>
            </Form>
        );
    }
        }

function RenderComments({comments, addComment, dishId, resetFeedbackForm}) {
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
            <CommentForm addComment={addComment} dishId={dishId} resetFeedbackForm={resetFeedbackForm}/>
        </div>
    );
 
}

function RenderDishSelected ({dish}) {
    return(
        <div key={dish.id} class="col-12 col-md-5 m-1">
            <Card>
                <CardImg with="100%" object src={baseUrl + dish.image}/>
                <CardTitle className="m=o">{dish.name}</CardTitle>
                <CardBody>{dish.description}</CardBody>
            </Card>
        </div>
    );
}

function DishDetails(props) {
    if (props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }

    else if (props.errMsg){
        return(
            <h4>{props.errMsg}</h4>
        );
    }

    else if (props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <RenderDishSelected dish={props.dish} isLoading={props.isLoading} errMsg={props.errMsg}/>
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                        resetFeedbackForm={props.resetFeedbackForm}
                    />
                </div>
            </div>
        );
    else
            return(
                <div></div>
            )
}

export default DishDetails;