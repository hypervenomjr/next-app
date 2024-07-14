import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const client = new PrismaClient
export function GET(req : NextRequest){

return NextResponse.json({
    username: "Vedantjr11",
    name: "Vedant"
})

}

export async function POST(req : NextRequest){

    const headers = req.headers.get("authorization");

    const params = req.nextUrl.searchParams.get("name");

    const body = await req.json();

     try{
        await client.user.create({
            data: {
        
                    email: body.email,
                    password: body.password
            }
        })
     } 
   catch(e){
   return NextResponse.json({
        message: "Error while signing up"
    })
   }

return NextResponse.json({
    message: "You are signed up"
})


}