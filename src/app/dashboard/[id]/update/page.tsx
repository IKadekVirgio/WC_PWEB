'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabaseClient } from '@/utils/supabase';
import { uploadImage } from '@/utils/uploadImage';

export default function UpdateProduct() {
    const { id } = useParams();
    const router = useRouter();

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [currentPrice, setCurrentPrice] = useState(0);
    const [originalPrice, setOriginalPrice] = useState(0);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const { data } = await supabaseClient.from('products').select('*').eq('id', id).single();
            if (data) {
                setName(data.name);
                setSlug(data.slug);
                setCurrentPrice(data.current_price);
                setOriginalPrice(data.original_price);
                setPreviewUrl(data.image);
            }
        })();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            let imageUrl = previewUrl;
            if (imageFile) {
                imageUrl = await uploadImage(imageFile, previewUrl!);
            }

            const { error } = await supabaseClient
                .from('products')
                .update({
                    name,
                    slug,
                    current_price: currentPrice,
                    original_price: originalPrice,
                    image: imageUrl,
                })
                .eq('id', id);

            if (error) throw error;

            router.push('/dashboard');
        } catch (err) {
            alert('Gagal memperbarui data');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 text-white bg-[#121212] min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Update Product</h1>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <p className="mb-2">Product Name</p>
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-4 w-full p-2 bg-[#1e1e1e] rounded"
                    />
                </div>
                <div>
                    <p className="mb-2">Slug</p>
                    <input
                        placeholder="Slug"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="mb-4 w-full p-2 bg-[#1e1e1e] rounded"
                    />
                </div>
                <div>
                    <p className="mb-2">Current Price</p>
                    <input
                        type="number"
                        placeholder="Current Price"
                        value={currentPrice}
                        onChange={(e) => setCurrentPrice(+e.target.value)}
                        className="mb-4 w-full p-2 bg-[#1e1e1e] rounded"
                    />
                </div>
                <div>
                    <p className="mb-2">Original Price</p>
                    <input
                        type="number"
                        placeholder="Original Price"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(+e.target.value)}
                        className="mb-4 w-full p-2 bg-[#1e1e1e] rounded"
                    />
                </div>
            </div>

            <div className="mt-4">
                <p className="mb-2">Image</p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        setImageFile(file ?? null);
                        if (file) setPreviewUrl(URL.createObjectURL(file));
                    }}
                    className="mb-4"
                />
            </div>

            {previewUrl && (
                <img src={previewUrl} alt="Preview" className="mb-6 max-w-sm rounded border border-gray-600" />
            )}

            <button type="submit" className="bg-white text-black px-6 py-2 rounded">
                Update
            </button>
        </form>
    );
}
