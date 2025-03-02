import { Component } from 'react';
import css from './App.module.css'
// import shortid from 'shortid';

import FeedbackOption from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

class App extends Component {
  INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    Good: this.INITIAL_STATE.good,
    Neutral: this.INITIAL_STATE.neutral,
    Bad: this.INITIAL_STATE.bad,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.Good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const totalPerc = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={total}
              positivePercentage={totalPerc}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;

