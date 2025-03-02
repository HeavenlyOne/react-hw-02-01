const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage ? (positivePercentage + '%') : '0%'}</li>
    </ul>
  );
};

export default Statistics;

//   const keys = Object.keys(feedbacks);

//   {keys.map(key => (
//     <li key={key}>
//       {key}: {feedbacks[key]}
