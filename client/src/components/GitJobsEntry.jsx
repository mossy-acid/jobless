import React from 'react';


export default class GitJobsEntry extends React.Component {
  constructor(props) {
    super(props);

    this.addToDB = this.addToDB.bind(this);
    this.changeHoverTrue = this.changeHoverTrue.bind(this);
    this.changeHoverFalse = this.changeHoverFalse.bind(this);
    

    this.state = {
      hover: false,
      clicked: false
    }
  }

  addToDB() {
    this.props.methods.postJob({
      title: this.props.data.jobTitle,
      company: this.props.data.company,
      description: this.props.data.description,
      location: this.props.data.location,
      jobURL: this.props.data.howToApply,
      complete: false,
      apply: false
    });

    this.setState({clicked: true});
  }


  changeHoverTrue() {
    this.setState({hover: true});
  }

  changeHoverFalse() {
    this.setState({hover: false});
  }


   render() {
      return (
        <li onMouseEnter={this.changeHoverTrue} onMouseLeave={this.changeHoverFalse} className="col-xs-6 gitJobs">
        {(() => {
          if (this.state.hover) {
            if (!this.state.clicked) { 
              return (
                <img onClick={this.addToDB} className="add-icon" src="http://image000.flaticon.com/icons/svg/109/109691.svg"/>
              )
            } 
          }
          if (this.state.clicked) {
            return (
              <img onClick={this.addToDB} className="add-icon" src="https://d30y9cdsu7xlg0.cloudfront.net/png/131578-200.png"/>
            )
          }
        })()}
          <p className='center company'>{this.props.data.company}</p>
          <p className='center'>{this.props.data.jobTitle}</p>
          <p className='center location'>{this.props.data.location}</p>
        </li>
      );
    }
  }

