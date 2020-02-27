import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      title: "",
      techStack: "",
      message: "",
      nameError: null,
      emailError: null,
      final_name: "",
      final_email: ""
    };
  }
  validateName = event => {
    event.preventDefault();
    const name = event.target.value;
    this.setState({
      nameError: name.length > 0 ? null : "Name cannot be blank",
      final_name: name
    });
  };

  validateEmail = event => {
    event.preventDefault();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = event.target.value;
    this.setState({
      emailError: re.test(String(email))
        ? null
        : "Please provide a properly formatted email address",
      final_email: email
    });
  };

  handleSubmit = event => {
    const user = {
      name: this.state.final_name,
      email: this.state.final_email,
      title: this.state.final_title,
      techStack: this.state.final_techStack,
      message: this.state.final_message
    };
    console.log(user);

    if (this.state.final_name == "") {
      event.preventDefault();
      const name = event.target.value;
      this.setState({
        nameError: name.length > 0 ? null : "Please provide a name",
        final_name: name
      });
    }
    if (this.state.final_email == "") {
      event.preventDefault();
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const email = event.target.value;
      this.setState({
        emailError: re.test(String(email))
          ? null
          : "Please provide a properly formatted email address",
        final_email: email
      });
    }
  };

  render() {
    return (
      <form
        id="myForm"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onBlur={this.validateName}
            className={`form-control ${
              this.state.nameError ? "is-invalid" : ""
            }`}
          />
          <span>{this.state.nameError}</span>
        </div>
        <div className="form-group">
          <label>Work Email</label>
          <input
            type="email"
            name="email"
            onBlur={this.validateEmail}
            className={`form-control ${
              this.state.emailError ? "is-invalid" : ""
            }`}
          />
          <span>{this.state.emailError}</span>
        </div>
        <div className="form-group">
          <label>Position / Title</label>
          <input type="text" name="title" className="form-control" />
        </div>
        <div className="form-group">
          <label>HR Tech Stack (HRIS, ATS, LMS, etc.)</label>
          <input type="text" name="techStack" className="form-control" />
        </div>
        <div className="form-group">
          <label>How did you hear about us?</label>
          <textarea name="message" className="form-control"></textarea>
        </div>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <button
            className="btn theme-btn-blue theme-btn"
            type="submit"
            onClick={e => this.handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
