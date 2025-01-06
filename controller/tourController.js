const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`),
);

// middlewares
exports.checkId = (req, res, next, value) => {
  if (req.params.id * 1 >= tours.length) {
    // the return in this middleware is essential!!
    return res.status(404).json({ status: "failed", message: "Invalid ID" });
  }
  next();
};

// route handlers
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getATourById = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((elem) => elem.id === id);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.addTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        // 201 for creating reqs
        status: "success",
        data: {
          tour: newTour,
        },
      });
    },
  );
};

exports.updateATourById = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "Tour has been updated.",
    },
  });
};

exports.deleteATourById = (req, res) => {
  res.status(204).json({
    // 204 for deleting reqs (means no content)
    status: "success",
    data: null,
  });
};
