import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";

class Menu extends Component {
    state={
        dishes: DISHES,
        selectedDish: null,
        isModalOpen: false
    }

    //Function
    selectedItem = dish => {
        this.setState({ 
            selectedDish: dish,
            isModalOpen: !this.state.isModalOpen
        })
        
    }

    isModalOpen = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    

    render(){
        document.title = "Menu";
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
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.isModalOpen}>
                        <ModalBody>
                            {dishDetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.isModalOpen}>
                                close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default Menu;