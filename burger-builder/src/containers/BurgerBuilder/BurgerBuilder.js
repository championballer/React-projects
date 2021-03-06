import React , {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from "../../hoc/Aux";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 1.7
};

class BurgerBuilder extends Component {
    
    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        totalPrice : 4, 
        purchasable : false,
        finalise : false
    };

    finaliseHandler = () => {
        this.setState({finalise : true});
    }

    finaliseCancelHandler = () => {
        this.setState({finalise : false});
    }

    finaliseContinueHandler = () => {
        alert("Order Registered");
    }

    updatePurchasble = (ingredients) => {

        const sum = Object.keys(ingredients)
                    .map((igKey)=>{
                        return ingredients[igKey];
                    })
                    .reduce((sum, el) => {
                        return sum + el;
                    },0);
        
        this.setState({purchasable : sum > 0});
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice:updatedPrice, 
            ingredients : updatedIngredients
        });

        this.updatePurchasble(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceAddition;

        this.setState({
            totalPrice:updatedPrice, 
            ingredients : updatedIngredients
        });

        this.updatePurchasble(updatedIngredients);
    }

    render () {

        const disabledInfo = {...this.state.ingredients};

        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key]<=0;          
        }

        return (
            <Aux>
                <Modal show = {this.state.finalise} modalClosed={this.finaliseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    finaliseCancelHandler={this.finaliseCancelHandler}
                    finaliseContinueHandler={this.finaliseContinueHandler}
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                price={this.state.totalPrice}
                addIngredient = {this.addIngredientHandler}
                removeIngredient = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                purchasable = {this.state.purchasable}
                finalise = {this.finaliseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
