import React from 'react';
import PropTypes from 'prop-types';
import {
  BtnWrapper,
  OptionBtn,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BtnWrapper>
    {options.map(option => (
      <OptionBtn
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </OptionBtn>
    ))}
  </BtnWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
