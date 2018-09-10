module.exports = function (app, mongoose) {
  // api ---------------------------------------------------------------------
  // health probe
  app.get('/probes/healthz', function (req, res) {
    // Check if the app is up and running
    res.sendStatus(200);
  });

  // readiness probe
  app.get('/probes/readinezz', function (req, res) {
    // Check the connection with mongo
    (mongoose.connection.readyState == 1) ? res.sendStatus(200): res.sendStatus(500);
  });
};