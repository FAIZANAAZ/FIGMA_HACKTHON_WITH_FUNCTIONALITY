
export const ProductDetail={
    title:"Product Detail",
    name:"ProductDetail",
    type:"document",
    fields: [
        {
            title:"Product DETAIL SECTIONS",
            name:"productDetailSections",
            type:"array",
            of:[
                {type:"object",
                    fields:[
                        {title:"Product Image",name:"productImage",type:"image"},
                        {title:"Product Heading",name:"productHeading",type:"string"},
                        {title:"Product rating",name:"productRating",type:"number"},
                        {title:"Product Price",name:"productPrice",type:"number"},

                    ]}
            ],
            
        }
    ]
}