import React from "react"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        className="col-md-10 col-lg-8 col-xl-6 m-auto"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mbjpejew"
        method="POST"
      >
        <div className="mb-3 text-left">
          <label htmlFor="email" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-label="Your name"
          />
        </div>
        <div className="mb-3 text-left">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-label="email address"
          />
        </div>
        <div className="mb-3 text-left">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            aria-label="message"
            placeholder="Enter your message here..."
          />
        </div>
        {status === "SUCCESS" ? (
          <p>Thanks for reaching out! I will get back to you soon.</p>
        ) : (
          <button
            type="submit"
            className="btn"
            aria-label="submit contact form"
          >
            Submit
          </button>
        )}
        {status === "ERROR" && (
          <p>
            Something has gone wrong! Please refresh the page and try again.
          </p>
        )}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}

export default ContactForm
