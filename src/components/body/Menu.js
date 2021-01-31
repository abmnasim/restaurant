import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';

class Menu extends Component {
    state={
        dishes: DISHES,
        selectedDish: null
    }

    //Function
    selectedItem = dish => {
        this.setState({ selectedDish: dish })
    }
    

    render(){
        let dishDetails = null;
        if(this.state.selectedDish != null){
            dishDetails = <DishDetails dish={this.state.selectedDish}/>;
        }   

        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem 
                    dish={item}
                    key={item.id}
                    selectedDish={this.selectedItem}
                />
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetails}
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;