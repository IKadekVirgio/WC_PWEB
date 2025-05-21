'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/utils/supabase';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const { data } = await supabaseClient
                .from('products')
                .select('*')
                .eq('id', id)
                .single();
            setProduct(data);
        })();
    }, [id]);

    if (!product) return <p className="text-white p-8">Loading...</p>;

    return (
        <div className="p-8 text-white bg-[#121212] min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Product Detail</h1>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <p className="mb-2">Product Name</p>
                    <div className="mb-4 w-full p-2 bg-[#1e1e1e] rounded">{product.name}</div>
                </div>
                <div>
                    <p className="mb-2">Slug</p>
                    <div className="mb-4 w-full p-2 bg-[#1e1e1e] rounded">{product.slug}</div>
                </div>
                <div>
                    <p className="mb-2">Current Price</p>
                    <div className="mb-4 w-full p-2 bg-[#1e1e1e] rounded">{product.current_price}</div>
                </div>
                <div>
                    <p className="mb-2">Original Price</p>
                    <div className="mb-4 w-full p-2 bg-[#1e1e1e] rounded">{product.original_price}</div>
                </div>
            </div>

            <div className="mt-6">
                <p className="mb-2">Image</p>
                {product.image ? (
                    <img src={product.image} alt={product.name} className="mb-4 max-w-sm rounded border border-gray-600" />
                ) : (
                    <div className="p-4 bg-[#1e1e1e] rounded text-gray-400">No image available</div>
                )}
            </div>
        </div>
    );
}
