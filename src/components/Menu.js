import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenu({dish}) {
    return(
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" object src={dish.image}/>
                <CardImgOverlay className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return(
            <div>
                <RenderMenu dish={dish}/>
            </div>
        );
    });


    return(
        <div className="container">
            <div className="row">
                <div className="col-10">
                    {menu}
                </div>
            </div>
        </div>
    );
}

export default Menu;