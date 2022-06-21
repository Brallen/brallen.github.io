import React, { useEffect, useState } from 'react';

import { Paper, TextField, Typography } from '@mui/material';
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
  adjustedText: {
    fontWeight: '600',
  },
};

const TEXT = {
  scoreText: 'Student\'s Score',
  totalScoreText: 'Assignment Score',
  floorText: 'Floor Percentage',
  adjustedScoreText: 'Adjusted Score',
};

type FormValue = number | undefined;

const getAdjustedValueFromFormField = (value: string):FormValue => {
  return value.length === 0 ? undefined : Number(value);
};

const applyStateChange = (fn: (a:FormValue) => void, value:FormValue) => fn(value);

const updateFormValueState = (fn: (a: FormValue) => void, value: string) => {
  const adjustedValue = getAdjustedValueFromFormField(value);
  applyStateChange(fn, adjustedValue);
};

const GradeCalculatorForm: React.FC = () => {
  const [ score, setScore ] = useState<number>(undefined);
  const [ totalScore, setTotalScore ] = useState<number>(undefined);
  const [ floor, setFloor ] = useState<number>(40);
  const [ adjustedScore, setAdjustedScore ] = useState<number>(undefined);

  useEffect(() => { // validate form at least not empty
    if (!isNaN(score) && !isNaN(totalScore) && !isNaN(floor)) {
      calculateAdjustedScore();
    } else {
      setAdjustedScore(undefined);
    }
  }, [ score, totalScore, floor ]);

  const calculateAdjustedScore = () => {
    const flooredScorePercentage = (score * (100 - floor)) / totalScore;
    const adjustedPercentage = (flooredScorePercentage + floor) / 100;
    setAdjustedScore(adjustedPercentage * totalScore);
  };

  return (
    <Paper sx={classes.formContainer}>
      <form>
        <TextField type="number"
          label={TEXT.scoreText}
          sx={classes.formField}
          value={score === undefined ? '' : score}
          onChange={(event) => updateFormValueState(setScore, event.target.value)} />

        <TextField type="number"
          label={TEXT.totalScoreText}
          sx={classes.formField}
          value={totalScore === undefined ? '' : totalScore}
          onChange={(event) => updateFormValueState(setTotalScore, event.target.value)} />

        <TextField type="number"
          label={TEXT.floorText}
          sx={classes.formField}
          value={floor === undefined ? '' : floor}
          onChange={(event) => updateFormValueState(setFloor, event.target.value)} />

        <Typography variant="body2" sx={classes.adjustedScore}>
          {TEXT.adjustedScoreText}:
          {!isNaN(adjustedScore) && <Typography sx={classes.adjustedText}>{adjustedScore.toFixed(2)}</Typography>}
        </Typography>
      </form>
    </Paper>
  );
};

export default GradeCalculatorForm;
