
// hm ismy koi name nhi dengy ismy ye isi liye krty hen ke ak man section me pora landing page a jay or phely nhi
// jiski type document hoti he wahi alag se section bn kr dikhta he
export default  {
 title :"Landing Page",
 name:"landingpage",
 type:"document",
 fields:[
    {
      title:"Page sections",
      name:"sections" ,
      type:"array" ,
      // matlb bhut sari sections isy khengy array or object
      of:[
         { type:"heroSection" } ,
         { type:"newarrival" },
         { type:"topSelling" } ,
         { type:"happyCustomer" }
            // isy type deny ka matb is name sy ak page h0ga hmary pas    
      ]
    }
 ]
}
