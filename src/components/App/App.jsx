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

  handleGoodBtn = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutralBtn = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleBadBtn = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({
      positiveFeedback: Math.round((good / total) * 100),
    }));
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            onHandleGoodBtn={this.handleGoodBtn}
            onHandleNeutralBtn={this.handleNeutralBtn}
            onHandleBadBtn={this.handleBadBtn}
          />
          {!this.state.total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positiveFeedback={this.state.positiveFeedback}
              initialValue={this.props.initialValue}
            />
          )}
        </Section>
      </>
    );
  }
}
