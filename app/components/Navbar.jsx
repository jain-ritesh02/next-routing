import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] bg-green-600 text-white flex items-center justify-between px-4'>
      <h2>Navbar</h2>
      <div className='flex gap-6'>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/product"}>Product</Link>
        <Link href={"/details"}>Details</Link>
      </div>
    </div>
  )
}

export default Navbar
