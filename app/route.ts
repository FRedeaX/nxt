import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetch("https://cbsbaikonur.ru/elcatalog");
  console.log({ data });

  return NextResponse.json({ status: 200 });
}
