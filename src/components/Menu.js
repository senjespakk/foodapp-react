import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';


function RenderMenu({dish}) {
    return(
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" object src={baseUrl + dish.image}/>
                <CardImgOverlay className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Menu(props) {
    const menu = props.dishes.dishes.map((dish) => {
        return(
            <div>
                <RenderMenu dish={dish}/>
            </div>
        );
    });

    if (props.dishes.isLoading){
        return(
            <div className="contaainer">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }

    else if (props.dishes.errMsg){
        return(
            <div className="contaainer">
                <div className="row">
                    <h4>{props.errMsg}</h4>
                </div>
            </div>
        );
    }

    else
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