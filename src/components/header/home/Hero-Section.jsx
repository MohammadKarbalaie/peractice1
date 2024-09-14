export default function Hero(){
    return(
        <div className="grid grid-cols-2 items-center px-32 py-32 font-Inter bg-Natural_Silver">
            <div className="">
                <h2 className="w-full text-[50px] font-bold text-start text-gray-800">Lessons and insights </h2>
                <p className="text-[50px] font-bold text-start text-green-500 text-Shade1">from 8 years</p>
                <p className="mt-4 text-start font-normal">Where to grow your business as a photographer: site or social media?</p>
                <div className="flex items-start mt-4">
                     <button className="bg-Primary py-4 px-7 rounded-md text-Natural_White">Register</button>
                 </div>
           </div>
          
           <div className="mx-auto">
                <img src="./src/assets/Hero-section-img.png" alt="Hero" />
           </div>
           
        </div>
    )
}