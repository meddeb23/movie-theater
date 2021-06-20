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

module.exports = { formatDate };
