import React, { Component } from 'react';
import './styles/subscribe.css';

export default class Subscribe extends Component {
  constructor (props){
      super(props);
      this.state = {
        EMAIL:"",
        FNAME:"",
        LNAME:""
      }

      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }


  render() {
    var display = {
      display: "none",
    };
    var style = {
      position: "absolute",
      left: "-5000px"
    }
    return (
      <div id="mc_embed_signup">
        <h2>Subscribe to our email list to find out what the future has in store!</h2>
        <form action="https://goldorbit.us19.list-manage.com/subscribe/post?u=1ed8607fa4c65cc9fc834c082&amp;id=4f7cef4431" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
            	<label for="mce-EMAIL" className="label">Email Address  <span className="asterisk">*</span>
            </label>
            	<input type="email" value={this.state.EMAIL} onChange={this.handleChange} name="EMAIL" className="sub-email" id="mce-EMAIL" placeholder="Email"/>
            </div>
            <div className="mc-field-group">
            	<label for="mce-FNAME" className="label">First Name </label>
            	<input type="text" value={this.state.FNAME} onChange={this.handleChange} name="FNAME" className="sub-first" id="mce-FNAME" placeholder="First Name"/>
            </div>
            <div className="mc-field-group">
            	<label for="mce-LNAME" className="label">Last Name </label>
            	<input type="text" value={this.state.LNAME} onChange={this.handleChange} name="LNAME" className="sub-last" id="mce-LNAME" placeholder="Last Name"/>
            </div>
          	<div id="mce-responses" className="clear">
          		<div className="response" id="mce-error-response" style={display}></div>
          		<div className="response" id="mce-success-response" style={display}></div>
          	</div>
            <div style={style} aria-hidden="true">
              <input type="text" name="b_1ed8607fa4c65cc9fc834c082_4f7cef4431" tabindex="-1" value=""/>
            </div>
            <div className="clear">
              <input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" className="button"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
