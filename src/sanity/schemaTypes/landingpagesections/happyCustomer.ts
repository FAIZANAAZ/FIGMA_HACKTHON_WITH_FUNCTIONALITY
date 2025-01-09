export const happyCustomer =  {
    title:"Happy Customer",
    name:"happyCustomer",
    type:"object",
    fields:[
        {title:"Add Happy Customer Data",name:"happyCustomerData",type:"array",
            
            of:[
                {type:"object",fields:[
                    {title:"Happy Customer Name",name:"name",type:"string"},
                    {title:"Customer Review",name:"review",type:"string"},
                ]}
            ]}
    ]
}