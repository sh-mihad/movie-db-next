import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
   <Link href="/">
      <Image src="/logo.svg" alt='logo' height={26} width={139}/>
   </Link>
  )
}
