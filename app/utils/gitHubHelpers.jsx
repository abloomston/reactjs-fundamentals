var axios = require('axios');

const client_id = 'ID';
const client_secret = 'SECRET';

function getUserInfo (username) {
	return axios.get(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`);
}

var helpers = {
	getPlayersInfo: function(usernames) {
		return axios.all(usernames.map(getUserInfo))
      .then(infos => infos.map(info => info.data));
	}
};

module.exports = helpers;
