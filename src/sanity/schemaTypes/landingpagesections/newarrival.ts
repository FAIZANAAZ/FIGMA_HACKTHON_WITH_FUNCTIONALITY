

// esylikhny sy ye hoga ke hmy bar bar nhi cards ka alg alg data bnanana nhi pryga blky wo khod hi a jayga ak button ke again add krna he ya nhi 
export default {
    title:"NEW ARRIVALS",
    name:"newarrival",
    type:"object",
    fields:[
        {
            title:"ADD ARRIVAL DATA",
        name:"arrival",
        type:"array",
        of:[
           {
           type:"object",
           fields:[
            {title:'Arrival Image ',name:'arrivalimage', type:'image'},
            {title:'Arrival Heading ',name:'arrivalheading', type:'string'},
            {title:'Arrival Ranking ',name:'arrivalranking', type:'number'},
            {title:'Arrival Price ',name:'arrivalprice', type:'number'},
           ]
           }


        ]
        },
       
    ]
}