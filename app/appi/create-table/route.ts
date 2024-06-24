import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Users (id SERIAL PRIMARY KEY,Email VARCHAR(64),Password VARCHAR(64));`;
      // await sql`DROP TABLE Users`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}