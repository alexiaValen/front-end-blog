import React from 'react'
import { images } from '../constants'

const Header = () => {
  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div> logo
            <img className='' src={images.Logo} alt='logo'/>
        </div>
        <div className='flex gap-x-9 items-center'>
            <ul className='flex gap-x-5 items-center'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Articles</a>
                </li>
                <li>
                    <a href='/'>Pages</a>
                </li>
                <li>
                    <a href='/'>Pricing</a>
                </li>
            </ul>
            <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-900 hover:text-blue-800 transition-all duration-300'>
                Sign in
            </button>
        </div>
      </header>
    </section>
  )
}

export default Header
