import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import {VERCEL_BLOB_READ_WRITE_TOKEN} from '../constant'



export async function GET(request){
    return Response.json({ res: 'Hello world' })
}


export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

//   add timestamp to the filename
    const timestamp = Date.now()
    const newFilename = `${timestamp}_${filename}`


  const blob = await put(newFilename, request.body, {
    access: 'public',
    token:VERCEL_BLOB_READ_WRITE_TOKEN
  });
 
  return NextResponse.json(blob);
}