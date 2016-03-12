var axios = require('axios');

const client_id = GITHUB_CLIENT_ID; // set as env variable before running webpack
const client_secret = GITHUB_CLIENT_SECRET; // set as env variable before running webpack

function getUserInfo (username) {
	return axios.get(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return players.map(player => player.followers * 3 + player.totalStars);
}

var helpers = {
	getPlayersInfo: function(usernames) {
		return axios.all(usernames.map(getUserInfo))
      .then(infos => infos.map(info => info.data))
      .catch(function (err) {
        console.warn('Error in getPlayersInfo', err);
      });
	},
  battle: function (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;
