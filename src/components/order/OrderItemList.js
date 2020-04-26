import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import propTypes from "prop-types";
import { connect } from "react-redux";

class OrderItemList extends Component {
  constructor(props) {
    super(props);
  }

  renderOrderItems() {
    if (this.props.orderItemCount > 0) {
      let totalPrice = 0;
      const orderList = this.props.orderItems.map((order, index) => {
        const { qty, price, item } = order;
        totalPrice = parseInt(totalPrice) + parseInt(price);
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>
              <img width="120" src={item.image} alt="{item.name}" />
            </td>
            <td>{item.name}</td>
            <td>{qty}</td>
            <td className="text-right">Rs {price}</td>
          </tr>
        );
      });

      return (
        <>
          {orderList}
          <tr>
            <td colSpan="4" className="text-right">
              <strong>Total</strong>
            </td>
            <td colSpan="1" className="text-right">
              <strong> Rs. {totalPrice}</strong>
            </td>
          </tr>
        </>
      );
    } else {
      return (
        <tr>
          <td colSpan="5" className="text-center">
            <small>No items in your basket</small>
          </td>
        </tr>
      );
    }
  }

  orderButton() {
    if (this.props.orderItemCount > 0) {
      return (
        <Button variant="primary" onClick={() => this.confirmOrder()}>
          Confirm Order
        </Button>
      );
    } else {
      return (
        <Button variant="primary" onClick={() => this.orderMore()}>
          Order More
        </Button>
      );
    }
  }

  orderMore() {
    this.props.history.push("/");
  }

  confirmOrder() {}

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SKU</th>
                  <th></th>
                  <th>Bakery Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{this.renderOrderItems()}</tbody>
            </Table>
          </div>
          <div className="col-md-10"></div>
          <div className="col-md-2 text-right">{this.orderButton()}</div>
        </div>
      </>
    );
  }
}

OrderItemList.propTypes = {
  orderItems: propTypes.array.isRequired,
  orderItemCount: propTypes.number.isRequired,
  history: propTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    orderItems: state.order,
    orderItemCount: state.order.length,
  };
}

export default connect(mapStateToProps)(OrderItemList);
