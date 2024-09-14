export default function Navbar(){
    return(
    <div className="flex justify-between items-center font-Inter pb-4">
    
            <div className="w-full flex gap-4 font-semibold text-2xl">
                <img src="./src/assets/Logo.png" alt="logo" />   
                <p>Nexcent</p>
            </div>   
    
            <div className="w-full flex gap-6">
            <div className="flex flex-row mt-4">
                    <ul className="flex flex-nowrap gap-6">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>
                </div>
    
            <div className="px-8 flex items-baseline justify-center text-white gap-2 bg-green-600 rounded-xl bg-Primary py-[14px] text-Natural_White">
                <button className="">Rigester Now </button>
                <i className="fas fa-arrow-right-long text-md relative top-[2px] "></i>
            </div>
    </div>
    
    </div>
    )
    }