import React, { useState } from 'react';

import { Button, Paper, TextField, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

const classes: { [className: string]: SxProps } = {
  formContainer: {
    borderRadius: '15px',
    maxWidth: '350px',
    p: 4,
  },
  formField: {
    display: 'flex',
    mb: 2,
  },
  errorMessage: {
    color: 'error.main',
    pt: 2,
  },
};

const ContactForm: React.FC = () => {
  const [ status, setStatus ] = useState<string>('');
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ message, setMessage ] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const submitForm = (ev: any) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);
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
    <Paper sx={classes.formContainer}>
      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/mbjpejew"
        method="POST"
      >
        <TextField size="small" label="Name" variant="outlined" sx={classes.formField} value={name} onChange={handleNameChange} />
        <TextField size="small" label="Email address" variant="outlined" sx={classes.formField} value={email} onChange={handleEmailChange} />
        <TextField
          label="Message"
          multiline
          rows={2}
          sx={classes.formField}
          value={message}
          onChange={handleMessageChange}
        />
        {status === 'SUCCESS' ? (
            <Typography variant="body2">
              Thanks for reaching out! I will get back to you soon.
            </Typography>
          ) : (
            <Button variant="contained" disableElevation type="submit" aria-label="submit contact form">
              Submit
            </Button>
          )}
        {status === 'ERROR' && (
          <Typography variant="body2" sx={classes.errorMessage}>
            Something has gone wrong! Please refresh the page and try again.
          </Typography>
        )}
      </form>
    </Paper>
  );
};

export default ContactForm;
