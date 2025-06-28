import Banner from "@/Components/Store/Banner";
import Navbar from "@/Components/Store/Navbar";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-start">
      <Banner />
      <Navbar />
    </div>
  )
}

export default page;