import { type SchemaTypeDefinition } from 'sanity'


import landingpage from './landingpage'
import heroSection from './landingpagesections/heroSection'
import newarrival from './landingpagesections/newarrival'
import topSelling from './landingpagesections/topSelling'
import happyCustomer from './landingpagesections/happyCustomer'
import casualPage from './CasualPage/casualPage'
import ProductDetail from './DynamicPages/ProductDetail'
import product from './product'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,landingpage,heroSection,newarrival,topSelling,happyCustomer,
    casualPage,
    ProductDetail
  ],
}
