import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

function FeedbackOptions({ handleFeedback}) {
  return (
    <div>
      <Btn name={'good'} onClick={handleFeedback}>good</Btn>
      <Btn name={'neutral'} onClick={handleFeedback}>neutral</Btn>
      <Btn name={'bad'} onClick={handleFeedback}>bad</Btn>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
