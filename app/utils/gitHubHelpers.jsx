var axios = require('axios');

const client_id = GITHUB_CLIENT_ID; // set as env variable before running webpack
const client_secret = GITHUB_CLIENT_SECRET; // set as env variable before running webpack

function getUserInfo (username) {
	return axios.get(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`);
}

var helpers = {
	getPlayersInfo: function(usernames) {
		return axios.all(usernames.map(getUserInfo))
      .then(infos => infos.map(info => info.data))
      .catch(function (err) {
        console.warn('Error in getPlayersInfo', err);
      });
	}
};

module.exports = helpers;
