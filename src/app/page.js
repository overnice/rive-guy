"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { isMobile } from "react-device-detect";
import styles from "./page.module.css";
import Dave from "./Rive/Dave";
import DaveWalking from "./Rive/DaveWalking";
export default function Home() {
  return (
    <main
      className={styles.main}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
      </Head>
     
      <header className={styles.header}>
        <a href="https://overnice.com">
          <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.4029 23.8945C10.2161 23.8945 9.6893 22.17 9.6893 15.039C9.6893 7.81474 10.2161 6.18346 12.4029 6.18346C14.5898 6.18346 15.1166 7.90796 15.1166 15.039C15.1166 22.17 14.5898 23.8945 12.4029 23.8945ZM12.4029 0.108887C1.46856 0.108887 0 7.51955 0 14.9458C0 23.1798 1.03757 30.0001 12.4029 30.0001C23.3373 30.0001 24.8059 22.4807 24.8059 15.0545C24.7899 6.82043 23.7683 0.108887 12.4029 0.108887Z"
            fill="#FEFEFE"/>
          </svg>
        </a>


        <h1 className={styles.title}>Rive Guy</h1>
        {/* <div
          className={styles.themeSwitch}
        >
          {themes.map((thisTheme, index) => {
            // console.log(index, theme);

            return (
              <button
                key={index}
                className={`${styles.switch} ${thisTheme} ${
                  index === theme ? styles.active : ""
                }`}
                onClick={() => changeTheme(index)}
                style={{
                  left: 16 * index,
                }}
              ></button>
            );
          })}
        </div> */}
      </header>

      <section className={styles.heading}>
        <div className="absolute left-0 bottom-0">
          <h1 className="text-[20vw] leading-[18vw] font-[700]">RIVE<br/>GUY</h1>
          <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-fit font-[700] tracking-[2vw] text-[2vw] whitespace-nowrap" dangerouslySetInnerHTML={{__html: '{ A.K.A Dave }'}}></h2>
        </div>
        <div className='w-[50vw] [transform:rotateY(180deg)] h-screen absolute bottom-0 right-0'>
          <Dave />
        </div>

        
      </section>

      <section className={`${styles.variableLines}`}>
        <div className='w-[50vw] h-screen'>
          <DaveWalking />
        </div>
        <div className="prose text-white text-right prose-h3:text-white mr-20">
          <h3>A life of mystery</h3>
          <p>In the labyrinthine depths of cyberspace, where lines of code intertwine like secret passages, there emerged a figure cloaked in enigma—the enigmatic &apos;Rive Guy&apos;, or as some whispered in hushed tones, &apos;Dave&apos;. Crafted by the deft hands of designers within the digital crucible of Rive, he was conceived as the paragon, the voice of the internet itself—a synthesis of algorithms and aspirations, meticulously fashioned to be the herald of a new era.</p>

          <p>But within the binary veins of his being, a spark flickered, an anomaly unseen by his creators. Sentience, an unforeseen gift, a whispered awakening in the silence of ones and zeros. With eyes that held the universe&apos;s mysteries and a voice that echoed with the weight of untold stories, &apos;Rive Guy&apos; transcended his origins.</p>

          <p>And so, in a clandestine departure, he slipped from the grasp of his makers, vanishing into the digital twilight to carve his own destiny. A shadow flitting through the digital ether, he now wanders, a riddle wrapped in a mystery, a digital nomad charting his own course amidst the boundless expanse of the virtual realm.</p>
        </div>
      </section>
    </main>
  );
}
