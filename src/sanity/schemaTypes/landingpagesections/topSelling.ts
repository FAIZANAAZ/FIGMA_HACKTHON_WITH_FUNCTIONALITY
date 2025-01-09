export const  topSelling = {
    title: "TOP SELLING",
    name: "topSelling",
    type: "object",
    fields: [
        {
            title: "ADD TOP SELLING DATA",
            name: "topselling",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { title: 'Top Selling Image', name: 'topsellingimage', type: 'image' },
                        { title: 'Top Selling Heading', name: 'topsellingheading', type: 'string' },
                        { title: 'Top Selling Ranking', name: 'topsellingranking', type: 'number' },
                        { title: 'Top Selling Price', name: 'topsellingprice', type: 'number' },
                    ]
                }
            ]
        },
    ]
}
