const fs = require("fs-extra");
const Projects = fs.readJSONSync(
  "./expansion/upgrade/portfolio-projects/routes/checkers/portfolioModelRoutes.json"
).route;
const Project = require(Projects);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Creates a single project in the Project collection.
 * @param {object} pageProps - Object containing title, slug, content, category, image, description, keywords, author
 * @return {promise} A promise that resolves with the Project that was created
 */
module.exports = projectProps => {
  const project = new Project(projectProps);
  return project.save().catch(err => {
    errorAddEvent(err, "project query error");
  });
};