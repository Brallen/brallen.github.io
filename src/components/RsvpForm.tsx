import React, { useState } from "react";

const TEXT = {
  name: "Name",
  emailAddress: "Email address",
  message: "Message",
  submitButtonText: "Submit",
  successText: "Thanks for reaching out! I will get back to you soon.",
  errorText: "Something has gone wrong! Please try again.",
};

const RsvpForm: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [rsvpAnswer, setRsvpAnswer] = useState<string>("");
  const [numGuests, setNumGuests] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleRsvpAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRsvpAnswer(event.target.value);
  };

  const handleNumGuestsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumGuests(event.target.value);
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // one last check before submitting form
    if (name.length === 0 || email.length === 0 || rsvpAnswer.length === 0)
      return;

    const data = {
      name,
      email,
      rsvpAnswer,
    };

    const response = await fetch("https://formspree.io/f/mbjpejew", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (response.status === 200) {
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div
      className="card | apply-border-radius bg-neutral-100 color-primary-700"
      data-type="form"
    >
      <form className="flow" onSubmit={submitForm}>
        <div className="form-field">
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder=" "
            required
          />
          <label htmlFor="name">{TEXT.name}</label>
        </div>
        <div className="form-field">
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder=" "
            required
          />
          <label htmlFor="email">{TEXT.emailAddress}</label>
        </div>
        <div className="form-field">
          <fieldset>
            <legend>RSVP</legend>
            <div className="radio-wrapper">
              <input
                type="radio"
                id="rsvp-yes"
                name="rsvp-answer"
                value="rsvp-yes"
                onChange={handleRsvpAnswerChange}
                required
              />
              <label htmlFor="rsvp-yes">Yes</label>

              <input
                type="radio"
                id="rsvp-no"
                name="rsvp-answer"
                value="rsvp-no"
                onChange={handleRsvpAnswerChange}
                required
              />
              <label htmlFor="rsvp-no">no</label>
            </div>
          </fieldset>
        </div>
        {rsvpAnswer === "rsvp-yes" && (
          <div className="form-field">
            <input
              id="num-guests"
              type="text"
              value={numGuests}
              onChange={handleNumGuestsChange}
              placeholder=" "
              required
            />
            <label htmlFor="num-guests">Number of guests in party</label>
          </div>
        )}
        {status === "SUCCESS" ? (
          <p>{TEXT.successText}</p>
        ) : (
          <button
            type="submit"
            aria-label="submit contact form"
            className="button"
            disabled={
              name.length === 0 || email.length === 0 || rsvpAnswer.length === 0
            }
          >
            {TEXT.submitButtonText}
          </button>
        )}
        {status === "ERROR" && <p>{TEXT.errorText}</p>}
      </form>
    </div>
  );
};

export default RsvpForm;
