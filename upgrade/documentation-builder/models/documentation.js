const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/* Page Schema */
const DocumentationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  slug: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  sorting: {
    type: Number
  },
  description: {
    type: String
  },
  keywords: {
    type: String
  },
  author: {
    type: String
  }
});

module.exports = mongoose.model("Documentation", DocumentationSchema);
