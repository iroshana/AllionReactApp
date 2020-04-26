import React from "react";
import ItemList from "../items/ItemList";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as itemsActions from "../../redux/actions/itemActions";
import * as orderActions from "../../redux/actions/orderActions";
import { connect } from "react-redux";

class HomePage extends React.Component {
  componentDidMount() {
    const { items, actions } = this.props;

    if (items.length === 0) {
      actions.loadItems().catch((error) => {
        alert("Loading items failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <ItemList
          items={this.props.items}
          addOrderItem={this.props.actions.addOrderItem}
        />
      </>
    );
  }
}

HomePage.propTypes = {
  items: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadItems: bindActionCreators(itemsActions.loadItems, dispatch),
      addOrderItem: bindActionCreators(
        (orderItem) => orderActions.addOrderItem(orderItem),
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
