const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  let isUserLoggedIn;
  currentUserInfo = req.session.currentUser
  if (!currentUserInfo){
    isUserLoggedIn = false;
  } else {
    isUserLoggedIn = true;
  }
  res.render('index', {isUserLoggedIn, currentUserInfo});
});

module.exports = router;
