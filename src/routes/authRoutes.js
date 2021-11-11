const express = require ('express');
const passport = require ('passport');
const router = require('express').Router();

// TODO: try to revise this code and seperate into controller file.  Also try to see if you can use asyn/await.  Next is create the middleware/auth.js file

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email']}));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/'}),
  (req, res) => {
    res.redirect('/log');
  }
);

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/');
});

module.exports = router;
