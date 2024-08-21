'use server'
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function generateEmbeddings(docId: string) {
    auth().protect(); // protects un-authenticated users from signing in, with Clerk

    // turn a PDF into Embeddings and store in PineCone
    await generateEmbeddingsInPineconeVectorStore(docId);
    
    revalidatePath("/dashboard");

    return {completed: true};
}