import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Stay In Touch</h3>
        <p>Sign up to be the first to know when we launch.</p>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
            <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="Your Email" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <button type="submit">Stay updated</button>
          </p>
          <p>Your email will never be sold nor disclosed.
          </p>
        </form>
      </div>
    );
  }
}

