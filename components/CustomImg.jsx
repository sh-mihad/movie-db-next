import Image from 'next/image'

export default function CustomImg({src,width,height,alt}) {
  return (
   <Image className={href} src={src} alt={alt??src} width={width} height={height}/>
  )
}
