import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';


function RenderCard({item, isLoading, errMsg}) {
    if (isLoading){
        return(
            <Loading/>
        );
    }

    else if (errMsg){
        return(
            <h4>{errMsg}</h4>
        );
    }
    else 
        return(
            <Card>
                <CardImg src={baseUrl + item.image}/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ?<CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMsg={props.dishesErrMsg}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMsg={props.promoErrMsg}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} errMsg={props.leadersErrMsg}/>
                </div>
            </div>
        </div>
    )
}

export default Home;