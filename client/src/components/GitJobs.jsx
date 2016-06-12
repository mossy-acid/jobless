import React from 'react';
import fetch from 'isomorphic-fetch';

import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../reducer.js';
import GitJobsEntry from './GitJobsEntry.jsx';
import * as Job from '../actions/job.js';


export default class GitJobs extends React.Component {
  constructor(props) {
    super(props);

    this.retrieveQuery = this.retrieveQuery.bind(this);

    this.state = {
      gitJobs: null,
      fetching: false
    };
  }


  retrieveQuery() {
    this.setState({ fetching: true }, () => {
      let query = document.getElementById('search-bar').value;
      document.getElementById('search-bar').value = '';
      console.log(query);
      fetch(`/gitjobs?term=${query}`, {credentials: 'same-origin'})
      .then( res => res.json() )
      .then( jobs => {
        this.setState({
          gitJobs: jobs,
          fetching: false
        });

        noty({
          layout: 'topRight',
          theme: 'relax',
          type: 'warning',
          text: `${jobs.length} jobs found!`,
          dismissQueue: true,
          animation: {
            open: 'animated bounceInRight',
            close: 'animated rollOut'
            },
          timeout: 5000
        });

        // console.log('gitJobs state:', this.state.gitJobs);
        console.log('yobs', jobs);
      });
    });
  }

  componentDidMount() {
    document.getElementById('search-bar').onkeypress = e => {
      if(e.keyCode == 13) {
        this.retrieveQuery();
      }
    };
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="search-container">
              <input type="text" id="search-bar" placeholder="Seach by company, job title, or location..."/>
              <a onClick={this.retrieveQuery}><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
            </div>

            <div className="row jobs">
            {(() => {
              if (this.state.fetching) {
                return (
                  <div className="col-xs-12">
                    <img className="image-responsive center-block" src="ripple.gif"></img>
                  </div>
                )
              }
              if (this.state.gitJobs) {
                return (
                <ul className="jobList">
                  {this.state.gitJobs.map( (job, idx) => <GitJobsEntry data={job} methods={this.props.methods} key={idx} />)}
                </ul>
                )
              }
            })()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = function mapStateToProps(state) {
  const {job} = state;

  return {
    job
  }
}


const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    methods : {
      postJob: (data) => {
        dispatch(Job.post(data));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (GitJobs)
