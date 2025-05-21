'use client';

import { useEffect, useState } from 'react';
import ProductCard from './props/product-card';
import {supabaseClient} from "@/utils/supabase";

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  current_price: number;
  original_price: number;
}

export default function NewArrival() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabaseClient
          .from('products')
          .select('id, name, slug, image, current_price, original_price')
          .order('created_at', { ascending: false })
          .limit(3); // tampilkan 3 produk terbaru

      if (error) {
        console.error('Error fetching new arrivals:', error);
      } else {
        setProducts(data);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold">New Arrivals</h2>
        </div>

        {loading ? (
            <p className="text-gray-400">Loading products...</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                  <ProductCard
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      currentPrice={product.current_price}
                      originalPrice={product.original_price}
                      slug={product.slug}
                  />
              ))}
              {products.length === 0 && (
                  <p className="text-gray-500 col-span-3 text-center">
                    No products found.
                  </p>
              )}
            </div>
        )}
      </section>
  );
}
