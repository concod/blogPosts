import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    console.log(this.props.header);

    const user = this.props.header.find(
      (user) => user.id === this.props.userId
    );
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const MapStateToProps = (state) => {
  return { header: state.user };
};

export default connect(MapStateToProps, { fetchUser })(UserHeader);
