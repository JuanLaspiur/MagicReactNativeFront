const formatDate = (dateTimeString) => {
  if (!dateTimeString) return ''; // Handle case where dateTimeString is not defined

  const parts = dateTimeString.split(' ');
  const day = parts[1];

  // Extracting month abbreviation (sep.) and converting to number (09)
  const monthAbbreviation = parts[2].slice(0, -1); // Remove the dot at the end
  const month = getMonthNumber(monthAbbreviation);

  // Extracting last two digits of the year (24 from 2024)
  const yearLong = parts[3];
  const year = yearLong.slice(-3);

  // Return formatted date
  return `${day}/${month}/${year}`;
};

// Function to get month number from month abbreviation
const getMonthNumber = (monthAbbreviation) => {
  const monthMap = {
    'ene': '01', 'feb': '02', 'mar': '03', 'abr': '04',
    'may': '05', 'jun': '06', 'jul': '07', 'ago': '08',
    'sep': '09', 'oct': '10', 'nov': '11', 'dic': '12'
  };
  return monthMap[monthAbbreviation];
};

module.exports = {
  formatDate
};
