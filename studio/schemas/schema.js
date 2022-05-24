import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import products from './documents/products';
import categories from './documents/categories';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		products,
		categories
  ])
})
