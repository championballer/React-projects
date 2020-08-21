import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                            .map((igKey)=>{
                            return <li key={igKey}
                            ><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
                            });
    
    return (
        <Aux>   
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
        <p>Continue to checkout?</p>
        <p>Estimated Price : <strong>{props.price.toFixed(2)}</strong></p>
        <Button btnType={"Success"} clicked={props.finaliseContinueHandler}>CONTINUE</Button>
        <Button btnType={"Danger"} clicked={props.finaliseCancelHandler}>CANCEL</Button>
        </Aux>
    );
}

export default orderSummary;