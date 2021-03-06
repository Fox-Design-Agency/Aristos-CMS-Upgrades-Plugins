const fs = require("fs-extra");
const Documentations = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/documentationModelRoutes.json"
).route;
const Documentation = require(Documentations);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Finds a single documentation in the Documentation collection.
 * @param {objectID} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the documentation that matches the id
 */
module.exports = _id => {
  return Documentation.findById(_id).populate("category")
  .populate("author").catch(err => {
    errorAddEvent(err, "documentation query error");
  });
};