import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class OrderModal extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  get initialState() {
    return {
      isModalShow: false,
      item: {},
      isValidQty: true,
      isFormSubmitted: false,
      formErrors: {
        qty: "Qty should more than zero",
      },
      orderQty: 0,
      orderPrice: 0,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState(this.initialState);
    this.setState({
      isModalShow: nextProps.isModalShow,
      item: nextProps.selectedItem,
    });
  };

  handeleClose = () => {
    this.setState({
      isModalShow: false,
    });
  };

  calculateOrderedPrice = () => {
    if (this.state.orderPrice > 0) {
      return (
        <>
          <div className="col-sm-5">
            <small>
              <b>Order price - Rs {this.state.orderPrice}</b>
            </small>
          </div>
        </>
      );
    }
  };

  handleQty = (e) => {
    if (parseInt(e.target.value) > 0) {
      let qty = parseInt(e.target.value);
      let price = qty * parseInt(this.state.item.price);
      this.setState({ orderPrice: price, isValidQty: true, orderQty: qty });
    } else {
      this.setState({
        orderPrice: 0,
        isValidQty: false,
      });
    }
  };

  order = () => {
    if (this.props.authName !== "") {
      this.setState({
        isFormSubmitted: true,
      });
      if (this.state.isValidQty) {
        let order = {};
        order.qty = this.state.orderQty;
        order.price = this.state.orderPrice;
        order.item = this.state.item;
        order.date = new Date();

        this.props.addOrderItem(order);

        this.setState({ isModalShow: false });
      }
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <>
        <Modal show={this.state.isModalShow} onHide={() => this.handeleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Qty</label>
              <div className="col-sm-5">
                <input
                  type="number"
                  required
                  onChange={this.handleQty}
                  className={
                    !this.state.isValidQty && this.state.isFormSubmitted
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  id="qty"
                  name="qty"
                  placeholder="Qty"
                />
                <div className="invalid-feedback">
                  {this.state.formErrors.qty}
                </div>
              </div>
              {this.calculateOrderedPrice()}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handeleClose()}>
              No, Thanks
            </Button>
            <Button variant="primary" onClick={() => this.order()}>
              Order
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

OrderModal.propTypes = {
  isModalShow: PropTypes.bool.isRequired,
  selectedItem: PropTypes.object.isRequired,
  addOrderItem: PropTypes.func.isRequired,
  authName: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    authName: state.authName,
  };
}

export default connect(mapStateToProps)(OrderModal);
