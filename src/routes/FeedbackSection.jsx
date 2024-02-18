import { useState } from "react";
import { Statistics } from "../feedback";
import { statisticsData } from "../feedback/data";
import {
  calculatePositiveAverage,
  calculateTotalAverage,
  shouldRenderStatistics,
} from "../feedback/helpers";
import { Button, ButtonSet, SectionHeader } from "../shared";

export const FeedbackSection = function () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;

  const averageStatistic = calculateTotalAverage({
    good,
    bad,
    totalFeedback,
  });
  const positiveAverage = calculatePositiveAverage({ good, totalFeedback });

  const statistics = [
    statisticsData.goodStatistic(good),
    statisticsData.neutralStatistic(neutral),
    statisticsData.badStatistic(bad),
    statisticsData.allStatistic(totalFeedback),
    statisticsData.totalAverageStatistic(averageStatistic),
    statisticsData.positiveAverageStatistic(positiveAverage),
  ];

  const handleIncreaseGood = () => {
    setGood((prevTotal) => prevTotal + 1);
  };

  const handleIncreaseNeutral = () => {
    setNeutral((prevTotal) => prevTotal + 1);
  };

  const handleIncreaseBad = () => {
    setBad((prevTotal) => prevTotal + 1);
  };

  return (
    <section className="section">
      <SectionHeader text="give feedback" />
      <ButtonSet>
        <Button
          label="good"
          handleUpdate={handleIncreaseGood}
          level="success"
        />
        <Button
          label="neutral"
          handleUpdate={handleIncreaseNeutral}
          level="secondary"
        />
        <Button label="bad" handleUpdate={handleIncreaseBad} level="danger" />
      </ButtonSet>
      <Statistics
        statistics={statistics}
        shouldRenderStatistics={shouldRenderStatistics({ totalFeedback })}
      />
    </section>
  );
};
