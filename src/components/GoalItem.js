import React, { Component} from 'react';
import {completeGoalRef} from '../firebase'

  completeGoal() {

  }

class GoalItem extends Component {
  render() {
    console.log('this.props.goal', this.props.goal);
    const { email, title} = this.props.goal;
    return (
      <div style={{margin: '5px'}}>
      <strong>{title}</strong>
      <span style={{marginRight: '5px' }}> submitted by <em>{email}</em></span>
      <button
      className='btn btn-sm btn-primary'
      onClick={()=> this.completeGoal()}>
      Complete
      </button>
      </div>
    )
  }
}

export default GoalItem;
