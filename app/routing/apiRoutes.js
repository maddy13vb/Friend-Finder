const friends = require('../data/friends')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })
  app.post('/api/friends', function (req, res) {

    let newFriend = req.body

    friends.push(newFriend)

    let newFriendTotal = newFriend.scores.reduce(function (a, b) {
      return parseInt(a) + parseInt(b)
    }, 0);

    let bestFriend = {}
    let bestScore = 100
    for (let i = 0; i < friends.length - 1; i++) {
      let friendScore = friends[i].scores.reduce(function (a, b) {
        return parseInt(a) + parseInt(b)
      }, 0);
      let score = 0

      if (friendScore >= newFriendTotal) {
        score = friendScore - newFriendTotal
      } else {
        score = newFriendTotal - friendScore
      }

      if (score < bestScore) {
        bestFriend = friends[i]
      }
    }

    res.json(bestFriend)
  })
}