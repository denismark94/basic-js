const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const re = /^-?\d+[\.?\d*]*$/gm;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string' || (sampleActivity.match(re) == null)) {
    return false;
  }
  sampleActivity = parseFloat(sampleActivity);
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  var t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/0.693);
  return(t);
};
