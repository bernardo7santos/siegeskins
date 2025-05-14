const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/discord", passport.authenticate("discord"));
router.get("/discord/callback", passport.authenticate("discord", {
  successRedirect: "http://localhost:5500/frontend/pages/dashboard.html",
  failureRedirect: "/"
}));
router.get("/logout", (req, res) => {
  req.logout(() => res.redirect("/"));
});

module.exports = router;