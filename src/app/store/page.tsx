import Banner from "@/Components/Store/Banner";
import Navbar from "@/Components/Store/Navbar";
import Hero from "@/Components/Store/Hero";
import Footer from "@/Components/Store/Footer";
import QuoteSlider from "@/Components/Store/QuoteSlider";
import fs from 'fs';
import path from 'path';
import Slider from "@/Components/Store/Slider";
import Segments from "@/Components/Store/Segments";
import Brands from "@/Components/Store/Brands";
import GoldenProducts from "@/Components/Store/GoldenProducts";
import PopularProducts from "@/Components/Store/PopularProducts";

const page = () => {
  const imagesFolder = path.join(process.cwd(), 'public/images/slider');
  const files = fs.readdirSync(imagesFolder);
  const pngFiles = files.filter((file) => file.endsWith('.png'));
  
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Slider imageFilenames={pngFiles} />
      <Brands />
      <GoldenProducts />
      <PopularProducts />
      <Segments />
      <QuoteSlider />
      <Footer />
    </>
  )
}

export default page;