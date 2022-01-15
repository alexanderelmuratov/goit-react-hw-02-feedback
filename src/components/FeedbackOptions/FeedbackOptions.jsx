import React from 'react';
import PropTypes from 'prop-types';
import {
  BtnWrapper,
  OptionBtn,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({
  onHandleGoodBtn,
  onHandleNeutralBtn,
  onHandleBadBtn,
}) => (
  <BtnWrapper>
    <OptionBtn type="button" onClick={onHandleGoodBtn}>
      Good
    </OptionBtn>
    <OptionBtn type="button" onClick={onHandleNeutralBtn}>
      Neutral
    </OptionBtn>
    <OptionBtn type="button" onClick={onHandleBadBtn}>
      Bad
    </OptionBtn>
  </BtnWrapper>
);

FeedbackOptions.propTypes = {
  onHandleGoodBtn: PropTypes.func.isRequired,
  onHandleNeutralBtn: PropTypes.func.isRequired,
  onHandleBadBtn: PropTypes.func.isRequired,
};
