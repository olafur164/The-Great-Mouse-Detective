const expect = require("chai").expect;


// expect(true).to.be.true;

titleCase = (title) => {
  const words = title.split(" ");
  let titleCasedWords = words.map(function (word) {
    return word[0].toUpperCase() + word.substring(1);
  });
  return titleCasedWords.join(" ");
}

expect(titleCase("the great mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A")
