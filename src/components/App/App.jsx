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

  handleButton = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    // return Object.values(this.state).reduce((total, value) => total + value, 0);
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { initialValue } = this.props;
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === initialValue
      ? initialValue
      : Math.round((good / total) * 100);
  };

  render() {
    const { initialValue } = this.props;
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleButton}
          ></FeedbackOptions>
          {!this.countTotalFeedback() ? (
            <Notification message="We appreciate your opinion!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              getTotal={this.countTotalFeedback}
              getPositiveFeedback={this.countPositiveFeedbackPercentage}
              initialValue={initialValue}
            />
          )}
        </Section>
      </>
    );
  }
}
