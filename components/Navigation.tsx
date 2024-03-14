"use client"
import { NavLinks } from '@/constants/Index'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import Transition from "./Transition";

const Navigation = () => {
    const [isRouting, setisRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setprevPath] = useState("/")

    useEffect(() => {
      
        if(prevPath !== path){
            setisRouting(true)
        }
    }, [path, prevPath])
    
    useEffect(() => {
      if(isRouting){
        setprevPath(path)
        const timeout = setTimeout(() => {
            setisRouting(false)
        }, 1200);
        return () => clearTimeout(timeout)
      }
    }, [isRouting])
    
    return (
      <div style={{ left: "20%" }}
      className="absolute z-[50] top-6 w-[100%] md:w-[20%] max-h-[100px] rounded-full flex justify-center items-center border bg-black border-white px-4 py-4">

      {/* {isRouting && <Transition />} */}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-2 pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation