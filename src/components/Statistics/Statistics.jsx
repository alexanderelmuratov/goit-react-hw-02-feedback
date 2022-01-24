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
}) => (
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
        <StatisticsData>
          Total: {getTotal() ? getTotal() : initialValue}
        </StatisticsData>
      </li>
      <li>
        <StatisticsData>
          Positive feedback:{' '}
          {getPositiveFeedback() ? getPositiveFeedback() : initialValue}%
        </StatisticsData>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  getTotal: PropTypes.func.isRequired,
  getPositiveFeedback: PropTypes.func.isRequired,
  initialValue: PropTypes.number.isRequired,
};
