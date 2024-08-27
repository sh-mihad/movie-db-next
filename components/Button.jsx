
export default function Button({handler,className,children}) {
  return (
    <button className={className} onClick={handler}>{children}</button> 
  )
}
