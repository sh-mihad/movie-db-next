'use client'

import { usePathname } from "next/navigation";


export default function PageDetailsNotFoundPage() {
    const pathname = usePathname()
    const movieId =pathname.split("/").at(-1);
  return (
    <div>
        <h1 className="text-white">Your Movie {movieId} is not found</h1>
    </div>
  )
  
}
