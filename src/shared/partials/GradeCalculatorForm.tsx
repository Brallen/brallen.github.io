import React, { useEffect, useState } from 'react';

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
  adjustedScore: {
    pt: 2,
  },
};

const TEXT = {
  submitButtonText: 'Calculate',
  scoreText: 'Student\'s Score',
  totalScoreText: 'Assignment Score',
  floorText: 'Floor Percentage',
  adjustedScoreText: 'Adjusted Score:',
};

const GradeCalculatorForm: React.FC = () => {
  const [ submitDisabled, setSubmitDisabled ] = useState<boolean>(true);
  const [ score, setScore ] = useState<number>(undefined);
  const [ totalScore, setTotalScore ] = useState<number>(undefined);
  const [ floor, setFloor ] = useState<number>(40);
  const [ adjustedScore, setAdjustedScore ] = useState<number>(undefined);

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      setScore(undefined);
    } else {
      setScore(Number(event.target.value));
    }
  };

  const handleTotalScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      setTotalScore(undefined);
    } else {
      setTotalScore(Number(event.target.value));
    }
  };

  const handleFloorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      setFloor(undefined);
    } else {
      setFloor(Number(event.target.value));
    }
  };

  useEffect(() => { // validate form at least not empty
    if (!isNaN(score) && !isNaN(totalScore) && !isNaN(floor)) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [ score, totalScore, floor ]);

  const calculateAdjustedScore = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const flooredScorePercentage = (score * (100 - floor)) / totalScore;
    const adjustedPercentage = (flooredScorePercentage + floor) / 100;
    setAdjustedScore(adjustedPercentage * totalScore);
  };

  return (
    <Paper sx={classes.formContainer}>
      <form onSubmit={calculateAdjustedScore}>
        <TextField type="number" label={TEXT.scoreText} sx={classes.formField} value={score === undefined ? '' : score} onChange={handleScoreChange} />
        <TextField type="number" label={TEXT.totalScoreText} sx={classes.formField} value={totalScore === undefined ? '' : totalScore} onChange={handleTotalScoreChange} />
        <TextField type="number" label={TEXT.floorText} sx={classes.formField} value={floor === undefined ? '' : floor} onChange={handleFloorChange} />

        <Button variant="contained" disableElevation disabled={submitDisabled} type="submit" aria-label="Calculate Score">
          {TEXT.submitButtonText}
        </Button>

        {!isNaN(adjustedScore) && (
          <Typography variant="body2" sx={classes.adjustedScore}>
            {TEXT.adjustedScoreText} {adjustedScore}
          </Typography>
        )}
      </form>
    </Paper>
  );
};

export default GradeCalculatorForm;