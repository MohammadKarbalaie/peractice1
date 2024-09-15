export default function Achievements(){
    return(
        <div className="font-Inter grid grid-cols-2 bg-Natural_Silver mt-14">
            <div className="flex flex-col items-start px-32 py-14 ml-8">
                <div className="flex flex-col text-3xl font-semibold items-start">
                    <h2 className="text-Natural_D_Gray mb-1">Helping a local</h2>
                    <h2 className="text-Primary">business reinvent itself</h2>
                </div>
                <p className="text-[#18191F] text-sm font-normal mt-1">We reached here with our hard work and dedication</p>
            </div>

            <div className="grid grid-rows-2 items-center ml-12 justify-center">
                <div className="flex flex-row gap-20 justify-center relative right-28">
                    <div className="flex items-start">
                        <img src="src/assets/Icon/Achievements/Icon1.png" className="mt-2" alt="icon1" />
                        <div className="flex flex-col ml-3 items-start">
                            <h2 className="text-lg text-Natural_D_Gray font-bold">2,245,341</h2>
                            <p className="text-Natural_Gray text-sm font-normal">Members</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <img src="src/assets/Icon/Achievements/Icon3.png" className="mt-2" alt="icon3" />
                        <div className="flex flex-col ml-3 items-start">
                            <h2 className="text-lg text-Natural_D_Gray font-bold">46,328</h2>
                            <p className="text-Natural_Gray text-sm font-normal">Clubs</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-[69px] justify-center relative right-24">
                    <div className="flex items-start">
                        <img src="src/assets/Icon/Achievements/Icon2.png" className="mt-2" alt="icon2" />
                        <div className="flex flex-col ml-3 items-start">
                            <h2 className="text-lg text-Natural_D_Gray font-bold">828,867</h2>
                            <p className="text-Natural_Gray text-sm font-normal">Event Bookings</p>
                        </div>
                    </div>
                    <div className="flex items-start mr-4">
                        <img src="src/assets/Icon/Achievements/Icon4.png" className="mt-2" alt="icon4" />
                        <div className="flex flex-col ml-3 items-start">
                            <h2 className="text-lg text-Natural_D_Gray font-bold">1,926,436</h2>
                            <p className="text-Natural_Gray text-sm font-normal">Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)};