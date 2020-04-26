import React, { Component } from "react";
import "./login.css";
import propTypes from "prop-types";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  get initialState() {
    return {
      name: "",
      isValid: false,
      error: "Please enter your name",
      submitted: false,
    };
  }

  handleNameChanage = (e) => {
    this.setState({
      name: e.target.value,
      isValid: e.target.value.length > 0,
    });
  };

  login = () => {
    this.setState({
      submitted: true,
    });
    if (this.state.isValid) {
      this.props.actions.login(this.state.name);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal text-center">
            Guest Login
          </h1>
          <label htmlFor="name" className="sr-only">
            The name use in the office
          </label>
          <input
            type="text"
            onChange={this.handleNameChanage}
            id="name"
            className={
              this.state.submitted && !this.state.isValid
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="The name use in the office"
            required
            autoFocus
          />
          <div className="invalid-feedback">{this.state.error}</div>
          <input
            className="btn btn-lg btn-primary btn-block mt-3"
            onClick={this.login}
            type="button"
            value="Login"
          />
        </form>
      </>
    );
  }
}

Login.propTypes = {
  history: propTypes.object.isRequired,
  actions: propTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    authName: state.authName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators((name) => authActions.login(name), dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
