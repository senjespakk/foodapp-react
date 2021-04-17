import React from "react";
import { Card, CardBody, CardImg, CardTitle, Row, Col, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

function CommentForm(props) {
    
    return(
        <LocalForm onSubmit={(values) => props.addComment(props.dishId, values.rating, values.author, values.comment)}>
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
        </LocalForm>
    );
}

export default CommentForm;
