import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../reducer.js';
import Login from './Login.jsx';
import TestComponent from './TestComponent.jsx'
import * as User from '../actions/user.js';
import * as Job from '../actions/job.js';
import * as JobList from '../actions/joblist.js';
import * as Debug from '../actions/debug.js';
import * as Event from '../actions/event.js';
import * as Session from '../actions/session.js';
import Dashboard from './Dashboard.jsx';
import Calendar from './calendar.jsx';
import JobAdd from './JobAdd.jsx';
import SortableComponent from './TestList.jsx';

// import GitJobs from './GitJobs.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log('THE PROPS AREEE', props);

    //THIS LINE TURNS ON DEBUG MODE WHICH CONSOLE LOGS EVERY ACTION
    //QUITE USEFUL
    this.props.methods.debugOn();
    this.showJobView = false;
  }

  componentDidMount() {
  }

  clickJobView() {
    this.showJobView = true;
  }

  renderTest() {
    return (
      <div>
        <SortableComponent />
      </div>
    )
  }

  render() {

    //UNCOMMENT THIS TO RENDER TEST COMPONENT
    // return this.renderTest();

    return (
     <div>
        <Dashboard methods={this.props.methods} user={this.props.user} job={this.props.job} jobList={this.props.jobList} event={this.props.event}/>
     </div>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  const {debug, user, job, jobList, event, session} = state;

  return {
    debug,
    user,
    job,
    jobList,
    event,
    session,
  }
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  //PUTs currently crash server if no id is provided in data object
  return {
    methods : {
      debugOn: () => {
        dispatch(Debug.on());
      },
      debugOff: () => {
        dispatch(Debug.off());
      },
      getUser: () => {          //GETs /api/user/:id and sets user to response
        dispatch(User.get());
      },
      postUser: (data) => {     //POSTs /api/user and sets user to response
        dispatch(User.post(data));
      },
      putUser: (data) => {      //PUTs /api/user and sets user to response
        dispatch(User.put(data));
      },
      getJob: (id) => {
        dispatch(Job.get(id));
      },
      postJob: (data) => {
        dispatch(Job.post(data));
      },
      putJob: (data) => {
        dispatch(Job.put(data));
      },
      removeJob: (data) => {
        dispatch(Job.remove(data));
      },
      getJobList: () => {
        dispatch(JobList.get());
      },
      getEvent: () => {
        dispatch(Event.get());
      },
      postEvent: (data) => {
        dispatch(Event.post(data));
      },
      putEvent: (data) => {
        dispatch(Event.put(data));
      },
      removeEvent: (data) => {
        dispatch(Event.remove(data));
      },
      getSession: () => {
        dispatch(Session.get());
      },
      getGitJobs: (data) => {
        dispatch(GitJobs.get());
      },
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App)




