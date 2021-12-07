import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSettings, getUsers } from '../../actions';
import Button from '@material-ui/core/Button';

class Home extends Component {
  componentDidMount() {
    this.props.getSettings();
    this.props.getUsers();
  }
  render() {
    let renderSet = null;
    let getUsers = this.props.users;
    console.log(this.props.users);
    if (this.props && this.props.settings) {
      renderSet = this.props.settings;
      console.log(renderSet.settings)
    }

    return (
      <div>
        <h2>Home</h2>
        {renderSet ? <p>{renderSet.settings}</p> : null}
        {getUsers ? <p>{getUsers.success}</p> : null}
        <Button variant="contained" color="primary">
          React Node REdux
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  users: state.getUsers
})

const mapDispatchToProps = {
  getSettings,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
