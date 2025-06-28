import Banner from "@/Components/Store/Banner";
import Navbar from "@/Components/Store/Navbar";
import Hero from "@/Components/Store/Hero";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-start">
      <Banner />
      {/* <Navbar /> */}
      <Hero />
    </div>
  )
}

export default page;