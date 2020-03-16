module.exports = function getSeason(date) {
  if (date == null) return 'Unable to determine the time of year!';
  if ((date.constructor.name != "Date") || (Object.prototype.toString.call(deeperFakeDate) == "[object Object]"))
  {
    throw new Error('Argument is not valid')
  }
  month = date.getMonth();
  if ((month < 2) || (month == 11))
    return "winter";
  else 
  {
    if (month < 5)
      return "spring";
    else
    {
      if (month < 8)
        return "summer";
      else 
        return "autumn";
    }
  }
};
