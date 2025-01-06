const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }
  if (Object.getOwnPropertyNames(date).length > 0 || typeof date != "object") {
    throw new Error("Invalid date!");
  }
  const SEASONS = {
    "winter": ["Dec", "Jan", "Feb"],
    "spring": ["Mar", "Apr", "May"],
    "summer": ["Jun", "Jul", "Aug"],
    "autumn": ["Sep", "Oct", "Nov"],
  };
  const MONTH = String(date).slice(4, 7);
  for (let season in SEASONS) {
    if (SEASONS[season].includes(MONTH)) {
      return season;
    }
  }
}

module.exports = {
  getSeason
};
