"use client"
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import dynamic from 'next/dynamic';

const Button = dynamic(() => import('./components/Button'), { ssr: false });

const navigation = [
  { name: "Projekti", href: "/projects" },
  { name: "Kontakt", href: "/contact" },
  { name: "Cene", href: "/pricing" },
  { name: "Jezik", href: "/pricing", options:["English ","Serbo-Croatian"] },

];

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <>
            {
              item.name == navigation[3].name ? 
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Jezik</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Srpski</a></li>
                  <li><a>Engleski</a></li>
                </ul>
              </div>

              :
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            }
            </>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        MOLY. AGENCY
      </h1>
        
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
        
           Best balkan marketing agency.
           <Link
              target="_blank"
              href="/contact"
              className="underline duration-500 ml-5 hover:text-zinc-300"
            >
            Contact us.
            </Link>
        </h2>
      </div>
    </div>
  );

}
