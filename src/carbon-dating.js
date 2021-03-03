const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (!sampleActivity  || sampleActivity <= 0 || sampleActivity >= 15 || typeof(sampleActivity) != 'string' || !(sampleActivity / 2)) {return false};
	const rateConstant = 0.693 / HALF_LIFE_PERIOD;
	let dateSample = Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstant;
	return Math.ceil(dateSample);
};
