export default function Communityupdates(){
    return(
        <div className="flex flex-col gap-2 font-Inter mt-10 items-center">

            <div className="flex flex-col items-center">
                <h2 className="font-semibold text-3xl text-Natural_D_Gray">Caring is the new marketing</h2>
                <p className="w-[490px] font-normal text-xs text-Natural_Gray mt-3">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who s joining the community, read about how our community are increasing their membership income and lot s more </p>
            </div>


            <div className="grid grid-cols-3 gap-32 mt-4 pb-32">

               <div className="relative">
                    <img src="src/assets/Communityupdates/image 1.png" width="290" alt="image18" />
                    <div className="w-[240px] absolute bg-Natural_White rounded-lg left-6 top-32 shadow-shadow1 px-2 py-4">
                       <p className="font-semibold text-Natural_Gray text-base">Creating Streamlined Safeguarding Processes with OneRen</p> 
                       <div className="flex relative justify-center mt-4">
                            <p className="text-Primary font-semibold text-base">Readmore</p>
                            <i className="fas fa-arrow-right-long relative top-[6px] ml-3 text-Primary"></i>
                       </div>
                    </div>
               </div>

               <div className="relative">
                    <img src="src/assets/Communityupdates/image 2.png" width="290" alt="image19" />
                    <div className="w-[240px] absolute bg-Natural_White rounded-lg left-6 top-32 shadow-shadow1 px-3 py-5">
                       <p className="font-semibold text-Natural_Gray text-base">What are your safeguarding responsibilities and how can you manage them?</p> 
                       <div className="flex relative justify-center mt-4">
                            <p className="text-Primary font-semibold text-base">Readmore</p>
                            <i className="fas fa-arrow-right-long relative top-[6px] ml-3 text-Primary"></i>
                       </div>
                    </div>
               </div>

               <div className="relative">
                    <img src="src/assets/Communityupdates/image 3.png" width="290" alt="image20" />
                    <div className="w-[240px] absolute bg-Natural_White rounded-lg left-6 top-32 shadow-shadow1 px-2 py-5">
                       <p className="font-semibold text-Natural_Gray text-base">Revamping the Membership Model with Triathlon Australia</p> 
                       <div className="flex relative justify-center mt-4">
                            <p className="text-Primary font-semibold text-base">Readmore</p>
                            <i className="fas fa-arrow-right-long relative top-[6px] ml-3 text-Primary"></i>
                       </div>
                    </div>
                </div> 

            </div>

        </div>
)};