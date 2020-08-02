##### Mongo query sample.

- `db.getCollection('ResourceConfig_SEO').find({page: 'home', device: 'desktop'})`
- `db.getCollection('ResourceConfig_SEO').find({page: 'city', device: 'desktop'})`
- `db.getCollection('ResourceConfig_SEO').find({page: 'common_city_page', device: 'desktop'})`

##### cache clean routes.

- city carpool cache clean `/rpool/carpoolcitycache/clearall`
- city bikepool cache clean `/rpool/bikepoolcitycache/clearall`
- home cache clean `rpool/homecache/clearall`

#### bug to fix;

- change bikepool dust file in controller.
