import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";
import Footer from "./footer";
import ArticleCard from "../components/articleCard"
import Image from "next/image";

export const revalidate = 60;
export default async function ProjectsPage() {
  
  

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
          <div className="grid w-[90vw] m-10 grid-rows-1 gap-8 mx-auto lg:grid-cols-2 ">
          <ArticleCard
            title={"as"}
            description={"Mi smo jedna od najboljih marketing agencija"}
            price={"12.99$"}
          />
          <ArticleCard
            title={"Email agencija"}
            description={"Mi smo jedna od najboljih marketing agencija"}
            price={"12.99$"}
          />
          <ArticleCard
            title={"Email agencija"}
            description={"Mi smo jedna od najboljih marketing agencija"}
            price={"12.99$"}
          />
          <ArticleCard
            title={"Email agencija"}
            description={"Mi smo jedna od najboljih marketing agencija"}
            price={"12.99$"}
          />
        </div>
        <div className="w-10">
          <Image 
            src="/ne.jpg" 
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <div className="grid grid-cols-1 gap-4 w">
              <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
