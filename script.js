document.addEventListener("DOMContentLoaded", () => {
  // Update the current time in UTC
  const updateTime = () => {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.querySelector(
      '[data-testid="currentTimeUTC"]'
    ).textContent = `Current Time (UTC): ${utcTime}`;
  };

  // Update the current day of the week
  const updateDay = () => {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[now.getUTCDay()];
    document.querySelector(
      '[data-testid="currentDay"]'
    ).textContent = `Current Day: ${currentDay}`;
  };

  // Initial updates
  updateTime();
  updateDay();

  // Update the time every second
  setInterval(updateTime, 1000);
});
