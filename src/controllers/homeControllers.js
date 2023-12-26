const getHomePage = (req, res) => {
  res.send("Hello World!");
};

const getExample = (req, res) => {
  res.render("index.ejs");
};

module.exports = {
  getHomePage,
  getExample,
};

// export many variable
    