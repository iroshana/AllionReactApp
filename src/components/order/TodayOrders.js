import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../../redux/actions/orderActions";
import { Table } from "react-bootstrap";

class TodayOrders extends Component {
  componentDidMount() {
    const { todayOrderList, actions } = this.props;

    if (todayOrderList.length === 0) {
      actions.loadTodayOrders().catch((error) => {
        alert("Loading orders failed" + error);
      });
    }
  }

  renderMyOrders() {
    if (this.props.todayOrderList.length > 0) {
      const orderList = this.props.todayOrderList.map((order) => {
        const { createdAt, name, items } = order;
        return items.map((item, index) => {
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(createdAt)))}
              </td>
              <td>
                <img width="120" src={item.item.image} alt="{item.name}" />
              </td>
              <td>{item.item.name}</td>
              <td>{item.qty}</td>
              <td className="text-right">Rs {item.price}</td>
            </tr>
          );
        });
      });

      return <>{orderList}</>;
    } else {
      return (
        <tr>
          <td colSpan="6" className="text-center">
            <small>No Orders in your shop</small>
          </td>
        </tr>
      );
    }
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Created Date</th>
                  <th></th>
                  <th>Bakery Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{this.renderMyOrders()}</tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

TodayOrders.propTypes = {
  todayOrderList: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    todayOrderList: state.order.todayOrderList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTodayOrders: bindActionCreators(
        orderActions.loadTodayOrders,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayOrders);
