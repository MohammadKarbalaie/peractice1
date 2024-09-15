export default function Customers(){
    return(
        <div className="grid grid-cols-2 bg-Natural_Silver font-Inter items-center mx-auto pb-2">

            <div className="mx-auto w-[307.66px] h-[302px] relative top-[-18px] mr-36 py-8">
                <img src="src/assets/Cutomers/image 9.svg" width="290" alt="image9" />
            </div>

            <div>


                <div id="content" className=" w-[655px] flex flex-col items-start ">
                    <div className="flex text-start text-Natural_Gray font-medium text-sm">
                        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h4 className="text-Primary font-semibold text-base mt-2">Tim Smith</h4>
                        <p className="text-Natural_Gray text-xs font-normal mt-2">British Dragon Boat Racing Association</p>
                    </div>
                </div>

                <div id="frame14" className="flex flex-row gap-8 mt-6">

                    <div>
                        <ul className="flex flex-row gap-12 mx-auto">
                            <li><img src="./src/assets/logo/Logo.png"  alt="logo1" /></li>
                            <li><img src="./src/assets/logo/Logo2.png" alt="logo2" /></li>
                            <li><img src="./src/assets/logo/Logo3.png" alt="logo3" /></li>
                            <li><img src="./src/assets/logo/Logo4.png" alt="logo4" /></li>
                            <li><img src="./src/assets/logo/Logo5.png" alt="logo5" /></li>
                            <li><img src="./src/assets/logo/Logo6.png" alt="logo6" /></li>
                        </ul>
                    </div>

                    <div className=" flex flex-row gap-2 mt-1 text-Primary">
                        <p>Meet all customers</p>
                        <i className="fas fa-arrow-right-long relative top-[6px] font-semibold text-sm"></i>
                    </div>
                </div>


            </div>

        </div>
)};