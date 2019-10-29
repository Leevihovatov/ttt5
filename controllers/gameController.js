var Game = require("../models/game");

const { body,validationResult,sanitizeBody } = require("express-validator");

exports.index = function(req, res, next) {
  //tähän ehkä jotain
};

exports.draw = function(req, res, next) {
  //tähän x/o tallennus databaseen
  res.redirect('/');
};

exports.restart = function(req, res, next) {
  //console.log(ttt.xs);
  //Tähän databasen tyhjennys
  Game.deleteMany({ turn: "x" || "o" },function (err) {
    if (err) { return next(err); }
    // Successful - redirect to new book record.
    res.redirect('/');
  });

  //testijuttu et database toimii
  /*var game = new Game(
    { turn: "x",
      xs: [11,12],
      os: [21,22]
    });

    game.save(function (err) {
      if (err) { return next(err); }
      // Successful - redirect to new book record.
      res.redirect('/')
    });*/
};

  /*sanitizeBody('*').trim().escape();

  // Create a post object
  // Improve: Use promises with .then()
  var post = new Post(
    { content: req.body.content,
      author: req.body.author
    });

    post.save(function (err) {
      if (err) { return next(err); }
      // Successful - redirect to new book record.
      res.redirect('/posts');

      Post.find({}).exec(function (err, list_posts) {
        if (err) { return next(err); }
        // Successful, so render
        res.render('posts', { title: 'Post List', post_list: list_posts});
      });*/
