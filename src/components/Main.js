import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import DishDetails from "./DishDetails";
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { addComment, fetchDishes, fetchLeaders, fetchPromo, fetchComments } from '../redux/ActionCreators';

// adds thunks from redux to the props
const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, comment, author) => dispatch(addComment(dishId, rating, comment, author)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    fetchPromo: () => dispatch(fetchPromo()),
    fetchComments: () => dispatch(fetchComments()),
    resetFeedbackForm: () => dispatch(actions.reset('feedback'))
})

// maps redux state to props
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

// main class component
class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchLeaders();
        this.props.fetchPromo();
        this.props.fetchComments();
    }
        

    render() {

        const HomePage = () => {
            return(
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading ={this.props.dishes.isLoading}
                    dishesErrMsg={this.props.dishes.errMsg}
                    promotion={this.props.promotions.promo.filter((promo) => promo.featured)[0]}
                    promoLoading ={this.props.promotions.isLoading}
                    promoErrMsg={this.props.promotions.errMsg}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading ={this.props.leaders.isLoading}
                    leadersErrMsg={this.props.leaders.errMsg}

                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetails
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading ={this.props.dishes.isLoading}
                    errMsg={this.props.dishes.errMsg}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMsg={this.props.comments.errMsg}
                    addComment={this.props.addComment}
                    resetFeedbackForm={this.props.resetFeedbackForm}
                />
            );
        }

        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Route path="/contactus" component={() => <Contact/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default   withRouter(connect(mapStateToProps, mapDispatchToProps) (Main));