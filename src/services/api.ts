"use server"

import { client } from "@/sanity/lib/client";

async function uploadImageToSanity(imageUrl: string) {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const asset = await client.assets.upload('image', blob);
  return asset;
}

export async function fetchAndUploadProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();


    for (const product of products) {

      const imageAsset = await uploadImageToSanity(product.image);

      const sanityProduct = {
        _id: `product-${product.id}`,
        _type: 'product',
        name: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage || 0,
        tags: product.category ? [product.category] : [],
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
        },
        description: product.description,
        rating: product.rating?.rate || 0,
        ratingCount: product.rating?.count || 0,
      };

      await client.createOrReplace(sanityProduct);
  
    }
  } catch (error) {
    console.error('Error uploading products:', error);
  }
}

