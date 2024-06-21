const formatDate = (dateTimeString) => {
    if (!dateTimeString) return ''; // Handle case where dateTimeString is not defined
    const parts = dateTimeString.split(' ');
  
    // Extract day, month, and year from the parts
    const day = parts[1];
    const month = getMonthNumber(parts[2]); // Convert month name to number
    const year = parts[3].slice(-2); // Get last two digits of the year
  
    // Return formatted date
    return `${day}/${month}/${year}`;
  };
  
  // Function to get month number from month abbreviation
  const getMonthNumber = (monthAbbreviation) => {
    const monthMap = {
      'ene.': '01', 'feb.': '02', 'mar.': '03', 'abr.': '04',
      'may.': '05', 'jun.': '06', 'jul.': '07', 'ago.': '08',
      'sep.': '09', 'oct.': '10', 'nov.': '11', 'dic.': '12'
    };
    return monthMap[monthAbbreviation];
  };

  module.exports = {
    formatDate,
    getMonthNumber
  };