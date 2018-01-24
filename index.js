// Common modules are better supported by Node over ES2016 modules
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express(); // Generates a running express app

passport.use(new GoogleStrategy()); //INFO: Let passport know that we want to use the google strategy

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Running app on port: ${PORT}`));