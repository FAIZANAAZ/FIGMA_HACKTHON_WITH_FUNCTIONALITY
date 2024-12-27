
import ProductFilterColor from '@/components/filtertsx/colorfilter'
import { FiltersSidebar } from '@/components/filtertsx/colorsbar'
import React from 'react'

const Filters = () => {
  return (
    <div className='  md:px-[100px]  grid md:grid-cols-[1fr_2fr] grid-cols-[1fr] py-16 justify-items-center md:justify-items-start'>
<FiltersSidebar/>
<ProductFilterColor/>
    </div>
  )
}

export default Filters
