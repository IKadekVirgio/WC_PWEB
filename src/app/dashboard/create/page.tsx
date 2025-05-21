'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {uploadImage} from "@/utils/uploadImage";
import {supabase} from "@/utils/supabase";

export default function CreateProduct() {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [currentPrice, setCurrentPrice] = useState(0);
    const [originalPrice, setOriginalPrice] = useState(0);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const imageUrl = imageFile ? await uploadImage(imageFile) : null;

            const { error } = await supabase.from('products').insert([
                {
                    name,
                    slug,
                    current_price: currentPrice,
                    original_price: originalPrice,
                    image: imageUrl,
                },
            ]);

            if (error) throw error;
            router.push('/dashboard');
        } catch (err) {
            alert('Gagal menyimpan data');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 text-white bg-[#121212] min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Create Product</h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="">
                    <p className={"mb-2"}>Product Name</p>
                    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-4 w-full p-2 bg-[#1e1e1e] rounded" />
                </div>
                <div className="">
                    <p className={"mb-2"}>Slug</p>
                    <input placeholder="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} className="mb-4 w-full p-2 bg-[#1e1e1e] rounded" />
                </div>
                <div className="">
                    <p className={"mb-2"}>Current Price</p>
                    <input type="number" placeholder="Current Price" value={currentPrice} onChange={(e) => setCurrentPrice(+e.target.value)} className="mb-4 w-full p-2 bg-[#1e1e1e] rounded" />
                </div>
                <div className="">
                    <p className={"mb-2"}>Original Price</p>
                    <input type="number" placeholder="Original Price" value={originalPrice} onChange={(e) => setOriginalPrice(+e.target.value)} className="mb-4 w-full p-2 bg-[#1e1e1e] rounded" />
                </div>
            </div>
            <div className="">
                <p className={"mb-2"}>Image</p>
                <input type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files?.[0];
                    setImageFile(file ?? null);
                    if (file) setPreviewUrl(URL.createObjectURL(file));
                }} className="mb-4" />
            </div>
            {previewUrl && <img src={previewUrl} className="mb-4 max-w-sm rounded" />}
            <button type="submit" className="bg-white text-black px-6 py-2 rounded">Save</button>
        </form>
    );
}
