//importing middleware
const { ensureAuth, ensureGuest } = require('../middleware/auth');

exports.fetchLoginPage = ensureGuest, (req, res) => {
  res.render('login');
}

exports.fetchLandingPage = ensureAuth, async (req, res) => {
  res.render('index', { userinfo: req.user });
}
