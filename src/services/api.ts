"use server"

import { client } from "@/sanity/lib/client";

async function uploadImageToSanity(imageUrl: string) {
  try {
    console.log('Fetching image:', imageUrl);
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }
    const blob = await response.blob();
    console.log('Image fetched, uploading to Sanity...');
    const asset = await client.assets.upload('image', blob);
    console.log('Image uploaded successfully');
    return asset;
  } catch (error) {
    console.error('Error in uploadImageToSanity:', error);
    throw error;
  }
}

export async function fetchAndUploadProducts() {
  try {
    console.log('Fetching products from FakeStore API...');
    const response = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 0 } // Disable cache
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const products = await response.json();
    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      try {
        console.log(`Processing product: ${product.title}`);
        
        // Check if product already exists
        const existingProduct = await client.fetch(
          `*[_type == "product" && _id == $id][0]`,
          { id: `product-${product.id}` }
        );

        if (existingProduct) {
          console.log(`Product ${product.title} already exists, skipping...`);
          continue;
        }

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

        console.log(`Creating product in Sanity: ${product.title}`);
        await client.createOrReplace(sanityProduct);
        console.log(`Product created successfully: ${product.title}`);
      } catch (productError) {
        console.error(`Error processing product ${product.title}:`, productError);
        // Continue with next product instead of stopping the whole process
        continue;
      }
    }

    console.log('All products processed successfully');
    return { success: true, message: 'Products uploaded successfully' };
  } catch (error) {
    console.error('Error in fetchAndUploadProducts:', error);
    return { success: false, message: (error as Error).message };
  }
}