module.exports = {
  // if user is authenticated then redirect to next page
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    // else redirect to login page
    } else {
      res.redirect('/');
    }
  },
  // if user is authenticated and going to login page then redirect to home page
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
      // if not authenticated redirect to login page
    } else {
      res.redirect('/log');
    }
  },
}
