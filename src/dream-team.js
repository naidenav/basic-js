const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (typeof(members) !== 'object' || members == null) return false;
	let dreamTeam = [];
	for (let i = 0; i < members.length; i++) {
		if (typeof(members[i]) == 'string') {
			for (let j = 0; j < members[i].length; j++) {
				if (members[i][j] != ' ') {
				dreamTeam.push(members[i][j].toUpperCase());
				break;
				}
			};
		}
	};
	dreamTeam.sort();
	dreamTeam = dreamTeam.join('');
	return dreamTeam;
};