export default function Client(){
    return(
        <div className="flex flex-col font-Inter py-11">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold text-Natural_D_Gray">Our Clients</h1>
                <p className="font-light text-Natural_Gray">We have been working with some Fortune 500+ clients</p>
            </div>

            <div className="flex mt-14">
                <ul className="flex flex-row gap-36 mx-auto">
                    <li><img src="./src/assets/logo/Logo.png" alt="logo1" /></li>
                    <li><img src="./src/assets/logo/Logo2.png" alt="logo2" /></li>
                    <li><img src="./src/assets/logo/Logo3.png" alt="logo3" /></li>
                    <li><img src="./src/assets/logo/Logo4.png" alt="logo4" /></li>
                    <li><img src="./src/assets/logo/Logo5.png" alt="logo5" /></li>
                    <li><img src="./src/assets/logo/Logo6.png" alt="logo6" /></li>
                    <li><img src="./src/assets/logo/Logo7.png" alt="logo7" /></li>
                </ul>
            </div>

        </div>
    )
}