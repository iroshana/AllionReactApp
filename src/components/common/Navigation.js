import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Badge } from "react-bootstrap";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  loginButton = () => {
    if (this.props.authName !== "") {
      return (
        <Link
          className="btn btn-outline-primary"
          onClick={this.logout}
          to="/login"
        >
          Logged As {this.props.authName}, Logout?
        </Link>
      );
    } else {
      return (
        <Link className="btn btn-outline-primary" to="/login">
          Guest Login
        </Link>
      );
    }
  };

  logout = () => {
    this.props.actions.logout();
  };

  render() {
    return (
      <>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 className="my-0 mr-md-auto font-weight-normal">
            <NavLink to="/">Allion Chuun Paan</NavLink>
          </h5>
          <nav className="my-2 my-md-0 mr-md-3">
            {this.props.authName !== "" ? (
              <>
                <NavLink exact to="/order" className="p-2 text-dark">
                  My Orders{" "}
                  <Badge variant="secondary">{this.props.orderItemCount}</Badge>
                </NavLink>
                |
              </>
            ) : (
              ""
            )}

            <NavLink exact to="/todayorder" className="p-2 text-dark">
              Today Orders
            </NavLink>
            {this.loginButton()}
          </nav>
        </div>
      </>
    );
  }
}

Navigation.propTypes = {
  orderItemCount: propTypes.number.isRequired,
  authName: propTypes.string.isRequired,
  actions: propTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    orderItemCount: state.order.orderItems.length,
    authName: state.authName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(authActions.logout, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
