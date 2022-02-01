import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsTitle,
  StatisticsData,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  getTotal,
  getPositiveFeedback,
  initialValue,
}) => {
  const total = getTotal() ? getTotal() : initialValue;
  const positiveFeedback = getPositiveFeedback()
    ? getPositiveFeedback()
    : initialValue;

  return (
    <div>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <ul>
        <li>
          <StatisticsData>Good: {good}</StatisticsData>
        </li>
        <li>
          <StatisticsData>Neutral: {neutral}</StatisticsData>
        </li>
        <li>
          <StatisticsData>Bad: {bad}</StatisticsData>
        </li>
        <li>
          <StatisticsData>Total: {total}</StatisticsData>
        </li>
        <li>
          <StatisticsData>
            Positive feedback: {positiveFeedback}%
          </StatisticsData>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  getTotal: PropTypes.func.isRequired,
  getPositiveFeedback: PropTypes.func.isRequired,
  initialValue: PropTypes.number.isRequired,
};
