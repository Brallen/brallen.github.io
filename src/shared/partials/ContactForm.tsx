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

const TEXT = {
  submitButtonText: 'Submit',
  successText: 'Thanks for reaching out! I will get back to you soon.',
  errorText: 'Something has gone wrong! Please try again.',
};

const ContactForm: React.FC = () => {
  const [ status, setStatus ] = useState<string>('');
  const [ submitDisabled, setSubmitDisabled ] = useState<boolean>(true);
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ message, setMessage ] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    validateForm();
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    validateForm();
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
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
        <TextField type="email" size="small" label="Email address" variant="outlined" sx={classes.formField} value={email} onChange={handleEmailChange} />
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
              {TEXT.successText}
            </Typography>
          ) : (
            <Button variant="contained" disableElevation disabled={submitDisabled} type="submit" aria-label="submit contact form">
              {TEXT.submitButtonText}
            </Button>
          )}
        {status === 'ERROR' && (
          <Typography variant="body2" sx={classes.errorMessage}>
            {TEXT.errorText}
          </Typography>
        )}
      </form>
    </Paper>
  );
};

export default ContactForm;
