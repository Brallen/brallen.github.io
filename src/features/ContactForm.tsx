import React, { useState } from 'react';

import { Button, TextField, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

const ContactForm: React.FC = () => {
  const [ status, setStatus ] = useState<string>('');

  const submitForm = (ev: any) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/f/mbjpejew"
      method="POST"
    >
      <TextField
        variant="outlined"
        label="Name"
        size="small"
      />
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
      {status === 'SUCCESS' ? (
        <Typography variant="body2">Thanks for reaching out! I will get back to you soon.</Typography>
      ) : (
        <Button variant="contained" disableElevation color="secondary" type="submit" aria-label="submit contact form">
          Submit
        </Button>
      )}
      {status === 'ERROR' && (
        <Typography variant="body2" sx={{ color: 'error.main' }}>
          Something has gone wrong! Please refresh the page and try again.
        </Typography>
      )}
    </form>
  );
};

export default ContactForm;
