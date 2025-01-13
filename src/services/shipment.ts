"use server"

export async function GetMethod() {
  try {
    const response = await fetch('https://api.shipengine.com/v1/carriers', {
      method: 'GET',
      headers: {
        "API-Key": process.env.SHIPENGINE_API_KEY as string,
        "Content-Type": "application/json",
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


// ///////////////////////////////////////////////
interface Data {
    to_name : string
    to_phone: string
    to_address: string
    to_city: string
    from_name: string
    from_company: string
    from_phone: string
    from_address: string
    from_city: string
    weight_value: number
    height: number
    width: number
    length: number
  }
export async function PostMethod(item: Data) {
    const {to_name, to_phone, to_address, to_city, from_name, from_company, from_phone, from_address, from_city, weight_value, height, width, length} = item
    try {
    const response = await fetch('https://api.shipengine.com/v1/labels',{
        method:'POST',
        headers:{
            "API-Key":process.env.SHIPENGINE_API_KEY as string,
            
            "Content-Type": "application/json",
           
        },
        body: JSON.stringify({
            // stringify HM ISI LIYE LGATY HEN TAKY HM OSY jSON ME CONVERT KR SKEN wrna ye heto jeson lekin ye string hi samjhta he isko 
            
                "shipment": {
                  "carrier_id": "se-1584179",
                  "service_code": "usps_priority_mail",
                  "ship_to": {
                    "name": to_name,
                    "phone": to_phone,
                    "address_line1": to_address,
                    "city_locality": to_city,
                    "state_province": "CA",
                    "postal_code": "95128",
                    "country_code": "US",
                    "address_residential_indicator": "yes"
                  },
                  "ship_from": {
                    "name": from_name,
                    "company_name": from_company,
                    "phone": from_phone,
                    "address_line1": from_address,
                    "city_locality": from_city,
                    "state_province": "TX",
                    "postal_code": "78731",
                    "country_code": "US",
                    "address_residential_indicator": "no"
                  },
                  "packages": [
                    {
                      "weight": {
                        "value": weight_value,
                        "unit": "ounce"
                      },
                      "dimensions": {
                        "height": height,
                        "width": width,
                        "length": length,
                        "unit": "inch"
                      }
                    }
                  ]
                }
              })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    
    // ab isko string me chang kiya tsky readable ho
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
    
}