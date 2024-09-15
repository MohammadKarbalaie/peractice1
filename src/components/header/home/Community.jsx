export default function Community(){
    return(
        <div className="flex flex-col gap-14 my-14 font-Inter">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl w-[477px] font-semibold mb-4 text-Natural_D_Gray">Manage your entire community in a single system</h2>
                <p className="font-light text-Natural_Gray">Who is Nextcent suitable for?</p>
            </div>


            <div id="frame" className="flex flex-row gap-44 justify-center">
                <div className="shadow-shadow1 rounded-2xl py-6 px-6">
                        <div className="flex flex-col items-center "> 
                            <div><img src="./src/assets/icon/community/icon2.png" alt="icon3" /></div>
                            <div className="w-[268px] font-semibold text-Natural_D_Gray text-2xl text-center my-3"><p>Membership Organisations</p></div>
                        </div>
                        <div className="w-[268px]">
                            <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                </div>
                <div className="shadow-shadow1 rounded-2xl py-6 px-6">
                        <div className="flex flex-col items-center"> 
                            <div><img src="./src/assets/icon/community/icon2.png" alt="icon2" /></div>
                            <div className="w-[228px] font-semibold text-Natural_D_Gray text-2xl text-center my-3"><p>National Associations</p></div>
                        </div>

                        <div className="w-[258px]">
                             <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                </div>
                <div className="shadow-shadow1 rounded-2xl py-6 px-6">
                       <div className="flex flex-col items-center"> 
                            <div><img src="./src/assets/icon/community/icon3.png" alt="icon3" /></div>
                            <div className="w-[188px] font-semibold text-Natural_D_Gray text-2xl text-center my-3"><p>Clubs And Groups</p></div>
                        </div>
                        <div className="w-[268px]">
                            <p>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                </div>
            </div>   
        </div>
    )
}