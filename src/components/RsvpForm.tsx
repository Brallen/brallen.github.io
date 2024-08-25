import React, { useState } from "react";
import { rsvpCopy } from "../assets/copy/rsvp";
import type { supportedLang } from "../types/types";

type RsvpFormProps = {
  lang: supportedLang;
};

const RsvpForm = ({ lang }: RsvpFormProps) => {
  const copy = rsvpCopy[lang];

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
      numGuests,
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
          <label htmlFor="name">{copy.name}</label>
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
          <label htmlFor="email">{copy.email}</label>
        </div>
        <div className="form-field">
          <fieldset>
            <legend>{copy.rsvp}</legend>
            <div className="radio-wrapper">
              <input
                type="radio"
                id="rsvp-yes"
                name="rsvp-answer"
                value="rsvp-yes"
                onChange={handleRsvpAnswerChange}
                required
              />
              <label htmlFor="rsvp-yes">{copy.yes}</label>

              <input
                type="radio"
                id="rsvp-no"
                name="rsvp-answer"
                value="rsvp-no"
                onChange={handleRsvpAnswerChange}
                required
              />
              <label htmlFor="rsvp-no">{copy.no}</label>
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
            <label htmlFor="num-guests">{copy.groupSize}</label>
          </div>
        )}
        {status === "SUCCESS" ? (
          <p>{copy.successText}</p>
        ) : (
          <button
            type="submit"
            aria-label="submit contact form"
            className="button"
            disabled={
              name.length === 0 ||
              email.length === 0 ||
              rsvpAnswer.length === 0 ||
              (rsvpAnswer === "rsvp-yes" && numGuests.length === 0)
            }
          >
            {copy.submit}
          </button>
        )}
        {status === "ERROR" && <p>{copy.errorText}</p>}
      </form>
    </div>
  );
};

export default RsvpForm;
