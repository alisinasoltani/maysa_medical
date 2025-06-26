'use client'

import Image from "next/image";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSection from "@/Components/Body";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  return (
    <ScrollSection />
  );
}
