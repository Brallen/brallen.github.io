import React, { useEffect, useState } from 'react';

const TEXT = {
  name: 'Name',
  emailAddress: 'Email address',
  message: 'Message',
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
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => { // validate form at least not empty
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [ name, email, message ]);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      name,
      email,
      message,
    };

    const response = await fetch('https://formspree.io/f/mbjpejew', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        data,
      }),
    });

    if (response.status === 200) {
      setStatus('SUCCESS');
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className='card | apply-border-radius bg-neutral-100 color-primary-700' data-type='form'>
      <form className='flow' onSubmit={submitForm}>
        <div className='form-field'>
          <input id="name" type="text" value={name} onChange={handleNameChange}/>
          <label htmlFor="name">{TEXT.name}</label>
        </div>
        <div className='form-field'>
          <input id="email" type="email" value={email} onChange={handleEmailChange}/>
          <label htmlFor="email">{TEXT.emailAddress}</label>
        </div>
        <div className='form-field'>
          <textarea id="message" rows={2} value={message} onChange={handleMessageChange}/>
          <label htmlFor="message">{TEXT.message}</label>
        </div>
        {status === 'SUCCESS' ?
          <p>{TEXT.successText}</p> :
          <button type="submit" aria-label="submit contact form" className="button" disabled={submitDisabled}>
            {TEXT.submitButtonText}
          </button>
        }
        {status === 'ERROR' &&
          <p>{TEXT.errorText}</p>
        }
      </form>
    </div>
  );
};

export default ContactForm;
