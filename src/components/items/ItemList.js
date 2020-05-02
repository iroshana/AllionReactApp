import React, { Component } from "react";
import propTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import OrderModal from "../order/OrderModal";

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShow: false,
      selectedItem: {},
    };
  }

  orderItem = (item) => {
    this.setState({ isModalShow: true, selectedItem: item });
  };

  render() {
    const { items, addOrderItem } = this.props;
    return (
      <>
        <div className="row">
          {items.map((item) => {
            return (
              <div className="m-3" key={item.id}>
                <Card style={{ width: "15rem" }}>
                  <Card.Img
                    variant="top"
                    height="171"
                    width="238"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Rs. {item.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => this.orderItem(item)}
                    >
                      Order Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>

        <OrderModal
          isModalShow={this.state.isModalShow}
          selectedItem={this.state.selectedItem}
          addOrderItem={addOrderItem}
          history={this.props.history}
        ></OrderModal>
      </>
    );
  }
}

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  addOrderItem: propTypes.func.isRequired,
  history: propTypes.object.isRequired,
};

export default ItemList;
