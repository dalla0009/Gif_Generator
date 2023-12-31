import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden item-center ">
      <h1 className="bg-white rounded-lg  absolute  text-center mt-[40px]
      ml-[55px] text-4xl font-bold w-11/12 ">
        RANDOM GIFS
      </h1>
      <div className=" flex flex-col w-full  items-center gap-y-10 mt-[90px]">
        <Random/>
        <Tag/>


      </div>
    </div>
  );
}
