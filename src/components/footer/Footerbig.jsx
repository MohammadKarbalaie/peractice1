export default function FooterBig(){
    return(
            <div className="grid grid-cols-2 font-Inter bg-Natural_Black items-center">

                <div className="flex flex-col gap-9 px-28 py-10 items-start">

                    <div className="w-full flex gap-4 font-semibold text-2xl">
                        <img src="./src/assets/Footer/Icon.svg" alt="logo" />   
                        <p className="text-Natural_White">Nexcent</p>
                    </div>

                    <div className="flex flex-col items-start text-Natural_Silver font-normal text-xs">
                        <p>Copyright © 2020 Landify UI Kit.</p>
                        <p>All rights reserved</p>
                    </div>

                    <div className="felx flex-row items-start">
                        <ul className="flex flex-row gap-6 relative items-start">
                            <li className="py-1 px-2 rounded-full bg-Natural_White bg-opacity-10"><i className="fab fa-instagram  text-Natural_White"></i></li>
                            <li className="py-1 px-2 rounded-full bg-Natural_White bg-opacity-10"><i className="fab fa-dribbble text-Natural_White"></i></li>
                            <li className="py-1 px-2 rounded-full bg-Natural_White bg-opacity-10"><i className="fab fa-twitter text-Natural_White"></i></li>
                            <li className="py-1 px-2 rounded-full bg-Natural_White bg-opacity-10"><i className="fab fa-youtube text-Natural_White"></i></li>
                        </ul>
                    </div>

                </div>

                <div className="grid grid-cols-3">

                    <div>

                    </div>

                    <div>

                    </div>  

                    <div>

                    </div>

                </div>

            </div>
)};