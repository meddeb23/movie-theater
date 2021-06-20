const formatDate = (stringDate, mode = "full") => {
  const date = new Date(stringDate);
  const getMonthName = date.toLocaleDateString("default", { month: "long" });
  const year = date.getFullYear();
  const day = date.getDate();
  if (mode == "full") {
    return `${day} ${getMonthName} ${year}`;
  }
  console.log(`${stringDate} -- ${day}-${getMonthName}-${year}`);
  return `${getMonthName} ${year}`;
};

const displayRunTime = (runTime) => {
  const hour = parseInt(runTime / 60);
  const min = runTime % 60;
  let msg = hour === 0 ? "" : `${hour} h`;
  msg = min === 0 ? "" : `${min} min`;
  return msg;
};

module.exports = { formatDate, displayRunTime };
