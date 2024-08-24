import moviesData from "@/data/movieDB"
import { NextResponse } from "next/server"
export async function GET(_request) {

    return NextResponse.json(moviesData)
}