    import Image from 'next/image'  
    import logo from "../../assets/img/logo.png"

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between px-8 h-20'>
        <div className="logo">
            <Image src={logo} alt="Logo" width={100} height={100} />
        </div>  
        <div className="links gap-12 flex items-center">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Activities</a>
        </div>
        <div className="buttons flex items-center gap-2.5">
            <button className='bg-[#489B3F] text-white px-4 py-2 rounded-full'>Login / Register</button>
        </div> 
    </nav>
  )
}