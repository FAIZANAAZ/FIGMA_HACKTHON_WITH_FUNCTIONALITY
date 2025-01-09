
export const casualPage={
    title:"Casual Page",
    name:"casualPage",
    type:"document",
    fields:[
        {
            title:"Add Casual  Data",
            name:"casualData",
            type:"array",
            of:[{
                type:"object",
                fields:[
                    {title:"Casual Image",name:"casualImage",type:"image"},
                    {title:"Casual Heading",name:"casualHeading",type:"string"},
                    {title:"Casual Price",name:"casualPrice",type:"number"},
                    {title:"Casual Rating",name:"casualRating",type:"number"},
                ]
            }]

        }]
}