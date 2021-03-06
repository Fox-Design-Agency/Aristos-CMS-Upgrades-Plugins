const fs = require("fs-extra");
const DocumentationCategory = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/documentationCategoriesModelRoutes.json"
).route;
const DocumentationCategories = require(DocumentationCategory);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger").addError;

/**
 * Deletes a single documentation category from the Documentation Category collection
 * @param {objectID} _id - The ID of the documentation category to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = _id => {
    return DocumentationCategories.findByIdAndRemove(_id).catch(err => {
        errorAddEvent(err, "documentation category query error");
      });
};