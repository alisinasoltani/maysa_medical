import Banner from "@/Components/Store/Banner";
import Navbar from "@/Components/Store/Navbar";
import Hero from "@/Components/Store/Hero";
import Footer from "@/Components/Store/Footer";
import Quote from "@/Components/Store/Quote";

interface Quote {
  name: string,
  career: string,
  quote: string,
  profile_image_path: string,
}

const quotes: Quote[] = [
  {
    name: "نام و نام خانوادگی",
    career: "عنوان شغلی",
    quote: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    profile_image_path: "quote_profile_1"
  }
]

const page = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Quote name={quotes[0].name} career={quotes[0].career} quote={quotes[0].quote} profile_image_path={quotes[0].profile_image_path} />
      <Footer />
    </>
  )
}

export default page;