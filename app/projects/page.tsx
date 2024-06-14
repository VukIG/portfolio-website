import React from "react";
import { Navigation } from "../components/nav";
import Footer from "./footer";
import ArticleCard from "../components/ArticleCard"
import Image from "next/image";

export const revalidate = 60;
export default async function ProjectsPage() {
  
  

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projekti
          </h2>
          <p className="mt-4 text-zinc-400">
            Pogledajte iskustva naših klijenata i kako smo im mi pomogli da lansiraju svoj biznis
          </p>
          <div className="grid w-[90vw] m-10 grid-rows-1 gap-8 mx-auto lg:grid-cols-2 ">
          <ArticleCard
            title={"Email marketing kampanja"}
            description={"Stvarno se nisam nadala rezultatima, kakve su mi napravili. Neverovatan tim ljudim, neverovatna energija, odlična komunikacija. Stvarno su nadmašili sva moja očekivanja, sigurno ću vas zvati i za buduće projekte."}
            customerName={"Marija (personalni trener)"}
            price={"1000$"}
          />
          <ArticleCard
            title={"Email i Facebook ads marketing kampanja"}
            description={"Rad sa ovom agencijom je bilo jedno fantastično iskustvo. Izuzetna posvećenost i kreativnost u svakoj fazi našeg projekta. Zahvaljujući njima, naša prodaja se povećala za 30% u samo tri meseca. Preporučujem ih svima koji žele vrhunske marketinške usluge"}
            customerName="Marko (e-commerce store owner)"
            price={"500$"}
          />
          <ArticleCard
            title={"Facebook ads kampanja"}
            customerName="Miloš (fitness coach)"
            description={"Saradnja sa agencijom Moly na mojim email marketing kampanjama bila je fantastična. Njihov tim je uspeo da kreira personalizovane i privlačne e-mailove koji su značajno povećali stopu otvaranja i konverzije. Prodaja je porasla za čak 20% zahvaljujući njihovim naporima. Sve pohvale od mene"}
            price={"500$"}
          />
          <ArticleCard
            title={"Email marketing kampanja"}
            customerName="Stefan (guru influenser)"
            description={"Nakon što sam počeo da radim sa Moly na email marketing kampanjama, video sam neverovatan porast u angažmanu i prodaji. Kreirali su personalizovane i relevantne sadržaje koji su privukli pažnju mojih kupaca i povećali mi e-mail listu drastično"}
            price={"500$"}
          />
          <ArticleCard
            title={"Facebook ads i instagram marketing kampanja"}
            customerName="Jovan (fitness trener)"
            description={"Angažovanje Moly agencije za moje Facebook i Instagram reklame bila je najbolja odluka koju sam doneo u poslednjih godinu dana. Njihov odličan copywriting i precizno ciljanje publike doneli su mi impresivne rezultate. Stopa konverzije se udvostručila, a ROI je bio izvanredan"}
            price={"800$"}
          />
          <ArticleCard
            title={"Facebook ads kampanja"}
            customerName="Irena (Beauty influencer)"
            description={"Nikada nisam radio sa agencijom koja je toliko posvećena svojim klijentima. Pažnja prema detaljima i sposobnost da razumeju moje potrebe je za svaku pohvalu. Zahvaljujući njima, moj brend je stekao značajnu prepoznatljivost na tržištu"}
            price={"500$"}
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
