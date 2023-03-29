import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { Inter } from "next/font/google";
// import React, { useState, useEffect } from "react";

import "boxicons";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nike-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className="NavBar">
        {/* Top Navbar */}
        <div className="Top-Nav p-2 bg-neutral-200">
          <div className="right-nav float-right gap-2 mr-8 flex text-xs font-normal cursor-pointer ">
            <div className="Find-Store">
              <a href="http://"> Find a Store</a>
            </div>
            <div className="bar">|</div>
            <div className="Help">
              <a href="http://">Help</a>
            </div>
            <div className="bar">|</div>
            <div className="Join">
              <a href="http://">Join Us</a>
            </div>
            <div className="bar">|</div>
            <div className="Sign-in">
              <a href="http://">Sign-In</a>
            </div>
          </div>
          <div className="left-nav cursor-pointer">
            <div className="logo ml-8">
              <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
              </svg>
            </div>
          </div>
        </div>
        {/*Bottom Nav */}
        <div className="Bottom-Nav">
          {/* Right */}
          <div className="Right-nav flex float-right mt-5 gap-20 mr-12 cursor-pointer">
            {/* center Nav */}
            <div className="nav-center flex gap-8 text-base font-medium ">
              <div className="new">
                <a href="http://">New & Features</a>
              </div>
              <div className="men">
                <a href="http://">Men</a>
              </div>
              <div className="women">
                <a href="http://">Women</a>
              </div>
              <div className="kids">
                <a href="http://">Kids</a>
              </div>
              <div className="sale">
                <a href="http://">Sale</a>
              </div>
              <div className="snkrs">
                <a href="http://">SNKRS</a>
              </div>
            </div>
            <div className="search-etc flex gap-6 ">
              <div className="search-input div flex ">
                <box-icon name="search" size="sm"></box-icon>
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border rounded-3xl bg-neutral-200 cursor-pointer"
                />
              </div>
              <div className="heart">
                <box-icon size="sm" name="heart">
                  <a href="http://"></a>
                </box-icon>
              </div>
              <div className="whistlist">
                <box-icon size="sm" name="cart">
                  <a href="http://"></a>
                </box-icon>
              </div>
            </div>
          </div>
          {/* Left */}
          <div className="left-nav cursor-pointer ml-8">
            <svg viewBox="0 0 20 20" role="img" width="12vh" height="12vh">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Promo */}
      <div className="promo text-center p-4 bg-neutral-200 ">
        <p className="font-medium">Save Up to 40%</p>
        <div className="promo-nav underline text-sm">
          <a href="http://">Shop All Our New Markdowns</a>
        </div>
      </div>

      {/* Content */}
      <div className="content ">
        {/* Video */}
        <div className="video flex justify-center ">
          <Image src="/../public/airMax.gif" width="1180" height="500" alt="" />
        </div>
        {/* Slogan-Text-Button*/}
        <div className="slogan-text-Button p-5">
          {/* text */}
          <div className="text text-center text-lg">
            <h1>Just In</h1>
          </div>
          {/* Slogan */}
          <div className="slogan text-center text-6xl font-black cursor-pointer">
            <h1>NIKE AIR</h1>
            <h1>MAX PULSE</h1>
          </div>
          {/* Text 2 */}
          <div className="text text-center mt-4">
            <h1>
              Inspired by the energy of London's music scene comes the AIR MAX
            </h1>
            <h1>
              Pulse. A tough silhouette infused with an unreal sensation of Air.
            </h1>
          </div>
          {/* Button */}
          <div className="button text-center cursor-pointer mt-4">
            <button class="bg-black text-white text-base font-semibold py-2 px-5 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
        {/*Weekly Trending Content*/}
        <div className="Weekly-Trending-Content  text-2xl mx-16">
          {/* text */}
          <div className="weekly-text">Trending This Week</div>
          {/* shoes */}
          <div className="weekly-Shoes mt-4  cursor-pointer">
            <div className="first-section flex gap-4">
              <div className="Shoes1 w-max ">
                <Image
                  src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/w_383,c_limit/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png"
                  width="400"
                  height="400"
                  alt=""
                />
                <h1 className="text-base float-right"> Rp 1,549,000</h1>
                <h1 className="text-base">Nike Air Force 1 '07</h1>
                <h1 className="text-base text-neutral-400">Men's Shoes</h1>
              </div>
              <div className="Shoes2 w-max ">
                <Image
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png"
                  width="400"
                  height="400"
                  alt=""
                />
                <h1 className="text-base float-right"> Rp 2,850,000</h1>
                <h1 className="text-base">Air Jordan 1 Retro High OG</h1>
                <h1 className="text-base text-neutral-400">Men's Shoes</h1>
              </div>
              <div className="Shoes3 w-max ">
                <Image
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/97029bbe-ccc1-4ad0-b51e-eff86332418d/air-jordan-1-zoom-cmft-2-shoes-nX8Qqx.png"
                  width="400"
                  height="400"
                  alt=""
                />
                <h1 className="text-base float-right"> Rp 2,250,000</h1>
                <h1 className="text-base">Air Jordan 1 ZOOM CMFT 2</h1>
                <h1 className="text-base text-neutral-400">Men's Shoes</h1>
              </div>
            </div>
            <div className="second-section flex gap-4">
              <div className="Shoes1 w-max ">
                <Image
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/06cc2fd7-08e2-4df2-a88b-9862ca923510/air-jordan-11-retro-shoes-gMjfzz.png"
                  width="400"
                  height="400"
                  alt=""
                />
                <h1 className="text-base float-right"> Rp 3,319,000</h1>
                <h1 className="text-base text-amber-700">Most Favourite</h1>
                <h1 className="text-base">Air Jordan 11 Retro</h1>
                <h1 className="text-base text-neutral-400">Men's Shoes</h1>
              </div>
              <div className="Shoes2 w-max ">
                <Image
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ce6980d-60d0-478f-adf3-106c7bacced9/air-max-tw-se-shoes-8CTsWh.png"
                  width="400"
                  height="400"
                  alt=""
                />
                <h1 className="text-base float-right"> Rp 2,669,000</h1>
                <h1 className="text-base text-amber-700">
                  Sustainable Materials
                </h1>
                <h1 className="text-base">Nike Air Max TW SE</h1>
                <h1 className="text-base text-neutral-400">Men's Shoes</h1>
              </div>
              <div className="Shoes3 w-max ">
                <Image
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f16f67b2-9ac5-42ef-a539-d9df8ce3ffd7/air-max-97-se-shoes-Q9Jrdn.png"
                  width="400"
                  height="400"
                  alt=""
                />
                <h1 className="text-base float-right"> Rp 2,250,000</h1>
                <h1 className="text-base">Nike Air Max 97 SE</h1>
                <h1 className="text-base text-neutral-400">Men's Shoes</h1>
              </div>
            </div>
          </div>
        </div>
        {/* latest Product */}
        <div className="latest">
          <h1 className="text-2xl mt-28 mx-16">The Latest</h1>
          <div className="first-latest-content flex mx-16 mt-8 gap-16">
            {/* First Latest */}
            <div className="first-Bg-Img relative">
              <Image
                src="https://i.redd.it/5fx0o7u7keu71.jpg"
                width="600"
                height="600"
                alt=""
              />
              <div className=" first-bg-button absolute bottom-14 mx-20 cursor-pointer">
                <h1 className="text text-4xl text-white">Get High By Shoes</h1>
                <button class="bg-white text-black text-lg hover:bg-neutral-200 active:bg-neutral-200 focus:outline-none focus:ring focus:bg-neutral-200 font-semibold mt-4 py-3 px-6 rounded-full ">
                  Check Now
                </button>
              </div>
            </div>
            {/* Second Latest */}
            <div className="second-bg-img relative ">
              <Image
                src="http://static1.squarespace.com/static/54f4d1aae4b0014ec19ff956/54f62013e4b0589068219afa/5cebbf7115fcc0da6494dc41/1558954039294/air-jordan-1-la-to-chicago-release-date.gif?format=1500w"
                width="575"
                height="575"
                alt=""
              />
              <div className=" first-bg-button absolute bottom-14 mx-20 cursor-pointer">
                <h1 className="text text-4xl text-white">
                  Shoes That Can Make 9/11
                </h1>
                <button class="bg-white text-black text-lg hover:bg-neutral-200 active:bg-neutral-200 focus:outline-none focus:ring focus:bg-neutral-200 font-semibold mt-4 py-3 px-6 rounded-full ">
                  Check Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
