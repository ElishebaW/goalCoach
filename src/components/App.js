import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList'

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div style={{margin: '5%'}}>
      <h3>Goals</h3>
      <AddGoal />
      <GoalList />
      <button
        className="btn btn-danger"
        onClick={()=> this.signOut()}>
        Sign out
      </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}
export default connect(mapStateToProps, null) (App);
