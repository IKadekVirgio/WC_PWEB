'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/utils/supabase';

interface Product {
    id: number;
    name: string;
    current_price: number;
    original_price: number;
    image?: string; // kalau ingin hapus gambar juga
}

export default function ProductTablePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching products:', error);
        } else {
            setProducts(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (product: Product) => {
        const confirmDelete = confirm(`Are you sure you want to delete "${product.name}"?`);
        if (!confirmDelete) return;

        // 1. Hapus gambar di storage kalau ada
        if (product.image) {
            const path = product.image.split('/').pop(); // ambil nama file
            await supabase.storage.from('products').remove([path!]);
        }

        // 2. Hapus data dari tabel
        const { error } = await supabase.from('products').delete().eq('id', product.id);
        if (error) {
            alert('Gagal menghapus produk');
            console.error(error);
        } else {
            // Refresh data
            setProducts(products.filter((p) => p.id !== product.id));
        }
    };

    return (
        <div className="min-h-screen bg-[#121212] text-white p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Product List</h1>
                <Link
                    href={'/dashboard/create'}
                    className="bg-white text-[#1e1e1e] px-8 py-3 text-sm uppercase font-medium rounded hover:opacity-90 transition-colors"
                >
                    Add Product
                </Link>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-[#1e1e1e] border border-gray-700 rounded-lg">
                        <thead>
                        <tr className="bg-[#2a2a2a] text-left">
                            <th className="px-4 py-3 border-b border-gray-700">Product Name</th>
                            <th className="px-4 py-3 border-b border-gray-700">Current Price</th>
                            <th className="px-4 py-3 border-b border-gray-700">Original Price</th>
                            <th className="px-4 py-3 border-b border-gray-700">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-[#2e2e2e] transition-colors border-b border-gray-700">
                                <td className="px-4 py-3">{product.name}</td>
                                <td className="px-4 py-3 text-green-400">Rp {product.current_price.toLocaleString()}</td>
                                <td className="px-4 py-3 line-through text-gray-400">Rp {product.original_price.toLocaleString()}</td>
                                <td className="px-4 py-3 space-x-2">
                                    <Link href={`/dashboard/${product.id}`} className="text-blue-400 hover:underline">Detail</Link>
                                    <Link href={`/dashboard/${product.id}/update`} className="text-yellow-400 hover:underline">Edit</Link>
                                    <button
                                        onClick={() => handleDelete(product)}
                                        className="text-red-400 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr>
                                <td colSpan={4} className="text-center py-4 text-gray-400">
                                    No products found.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
