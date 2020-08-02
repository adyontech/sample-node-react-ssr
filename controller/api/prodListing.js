const ProductListing = require("../../products-dataset.json");

class OffersController {
  constructor() {}
  async getProdListing(req, res, next) {
    const { searchQuery, currentMaxIndex = 0, offset = 12 } = req.query;
    try {
      let findContentJS;
      if (searchQuery) {
        findContentJS = ProductListing.filter(x =>
          x.title.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      } else {
        findContentJS = ProductListing;
      }
      let hasMore = true;
      if (
        parseInt(currentMaxIndex) + parseInt(offset) >=
        findContentJS.length
      ) {
        hasMore = false;
      }
      findContentJS = findContentJS.slice(
        parseInt(currentMaxIndex),
        parseInt(currentMaxIndex) + parseInt(offset),
      );

      res.send({ data: findContentJS, hasMore });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new OffersController();
