export default function FooterBig(){
    return(
            <div className="flex flex-row font-Inter bg-Natural_Black items-center ">

                <div className="flex flex-col gap-9 px-52 py-10 items-start ">

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

                <div className="w-10/12 grid grid-cols-3 mr-64 ">

                    <div className="flex flex-col items-start">
                        <h2 className="font-semibold text-Natural_White text-base">Company</h2>
                        <div className="flex flex-col items-start font-normal text-Natural_Silver text-xs mt-4 gap-2">
                            <p>About us</p>
                            <p>Blog</p>
                            <p>Contact us</p>
                            <p>Pricing</p>
                            <p>Testimonials</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start">
                        <h2 className="font-semibold text-Natural_White text-base">Support</h2>
                        <div className="flex flex-col items-start font-normal text-Natural_Silver text-xs mt-4 gap-2 ">
                            <p>Help center</p>
                            <p>Terms of service</p>
                            <p>Legal</p>
                            <p>Privacy policy</p>
                            <p>Status</p>
                        </div>
                    </div>  

                    <div className="flex flex-col items-start">
                        <h2 className="font-semibold text-Natural_White text-base">Stay up to date</h2>
                        <div className="flex flex-row font-normal text-Natural_Silver text-xs mt-4 gap-2 relative">
                        <input type="email" className="bg-Natural_Gray rounded-lg px-2 py-2 w-56" placeholder="Your email address"/>
                        <span className="absolute right-2 top-2 " ><svg width="20" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_525_231)">
<path fillRule="evenodd" clipRule="evenodd" d="M12.4609 0.766873C12.6027 0.908682 12.6508 1.11919 12.5845 1.30848L8.93014 11.7495C8.85943 11.9516 8.67255 12.09 8.45867 12.0987C8.2448 12.1074 8.04727 11.9847 7.96034 11.7891L5.95368 7.2741L1.43869 5.26744C1.24309 5.18051 1.12037 4.98298 1.1291 4.7691C1.13782 4.55523 1.27622 4.36835 1.47826 4.29764L11.9193 0.643276C12.1086 0.577025 12.3191 0.625064 12.4609 0.766873ZM6.97186 6.99421L8.37965 10.1617L10.8433 3.12279L6.97186 6.99421ZM10.105 2.38449L3.06604 4.84813L6.23357 6.25592L10.105 2.38449Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_525_231">
<rect width="12.5293" height="12.5293" fill="white" transform="translate(0.606445 0.0919189)"/>
</clipPath>
</defs>
</svg></span>

                        </div>
                    </div>

                </div>

            </div>
)};