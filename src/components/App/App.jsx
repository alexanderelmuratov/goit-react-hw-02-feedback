import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { GlobalStyle } from 'components/App/GlobalStyle';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleBtn = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === this.props.initialValue
      ? this.props.initialValue
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtn}
          ></FeedbackOptions>
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              getTotal={this.countTotalFeedback}
              getPositiveFeedback={this.countPositiveFeedbackPercentage}
              initialValue={this.props.initialValue}
            />
          )}
        </Section>
      </>
    );
  }
}
