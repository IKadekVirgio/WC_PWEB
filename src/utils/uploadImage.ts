import { supabase } from "./supabase";

export async function uploadImage(file: File, oldImageUrl?: string): Promise<string> {
    if (oldImageUrl) {
        try {
            const path = oldImageUrl.split('/').slice(-1)[0]; // ambil nama file dari URL
            await supabase.storage.from('products').remove([path]);
        } catch (e) {
            console.warn('Gagal menghapus gambar lama:', e);
        }
    }
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage
        .from('products')
        .upload(fileName, file);

    if (error) throw error;

    const { data: publicUrl } = supabase
        .storage
        .from('products')
        .getPublicUrl(fileName);

    return publicUrl.publicUrl;
}
