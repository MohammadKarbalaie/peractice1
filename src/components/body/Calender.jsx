export default function Calender(){
    return(
        <div className="grid grid-cols-2 font-Inter items-center mx-auto mt-9 mb-16">

        <div className="mx-auto w-[307.66px] h-[302px] relative top-[-18px] mr-40 py-7">
            <img src="./src/assets/Calender/pana.svg"  alt="pana" />
        </div>

        <div className="w-[520px] flex flex-col items-start">
            <div className="flex flex-col items-start">
                <h2 className="text-Natural_D_Gray text-3xl font-semibold text-start">How to design your site footer like we did</h2>
                <p className="text-start text-Natural_Gray mt-4 font-normal text-xs" >Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            </div>
            <div className="text-Natural_White bg-Primary rounded-md px-7 py-3 mt-6 ">
                <button>Learn More</button>
            </div>
        </div>

    </div>
)};