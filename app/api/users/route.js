import { users } from "@/utilis/db";
import { NextResponse } from "next/server";

export function GET(){
   const data = users;
   return NextResponse.json(data, {status: 200});
}