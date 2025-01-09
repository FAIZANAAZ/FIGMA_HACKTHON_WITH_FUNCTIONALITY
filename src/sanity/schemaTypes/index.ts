import { type SchemaTypeDefinition } from 'sanity'




import { landingpage } from './landingpage'
import { heroSection } from './landingpagesections/heroSection'
import { newarrival } from './landingpagesections/newarrival'
import { topSelling } from './landingpagesections/topSelling'
import { casualPage } from './CasualPage/casualPage'
import { ProductDetail } from './DynamicPages/ProductDetail'
import { happyCustomer } from './landingpagesections/happyCustomer'
import { product } from './product'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,landingpage,heroSection,newarrival,topSelling,happyCustomer,
    casualPage,
    ProductDetail
  ],
}
