
import ProductFilterColor from '@/components/filtertsx/colorfilter'
import { FiltersSidebar } from '@/components/filtertsx/colorsbar'
import React from 'react'

const Filters = () => {
  return (
    <div className='  md:px-[60px]  grid md:grid-cols-[1fr_2.5fr] grid-cols-[1fr] py-16 justify-items-center md:justify-items-start gap-0'>
<FiltersSidebar/>
<ProductFilterColor/>
    </div>
  )
}

export default Filters
