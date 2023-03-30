import * as dayjs from "dayjs";

export const getDaysOfWeek = () => {
  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekIndex = today.getDay();
  const mondayDate = new Date(today);
  mondayDate.setDate(today.getDate() - dayOfWeekIndex + 1); // Set date to the nearest Monday
  const previousDaysOfWeek = [];
  for (let i = 1; i < dayOfWeekIndex; i++) {
    const previousDay = new Date(mondayDate);
    previousDay.setDate(mondayDate.getDate() + i - 1);
    const formattedDate =
      previousDay.getFullYear() +
      "/" +
      (previousDay.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      previousDay.getDate().toString().padStart(2, "0");

    previousDaysOfWeek.push(formattedDate);
  }
  previousDaysOfWeek.push(dayjs().format("YYYY/MM/DD"));
  return previousDaysOfWeek;
};

export const findAvg = (array, key) => {
  const avg = array.reduce((acc, cur) => {
    acc += cur[key];
    return acc;
  }, 0);
  return avg / array.length;
};
