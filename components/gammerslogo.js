import Image from "next/image";
import Carousel from "./carousel";

const GameLogo = ({ screenWidth }) => {
    return (
        <section style={{background: '#030115'}} className="flex items-center justify-between bg-[#030115] px-20px sm:px-50px 2xl:px-90px pt-60px pb-50px lg:pt-70px lg:pb-73px space-x-34px lg:space-x-50px 2xl:space-x-62.4px">
            <Carousel show={screenWidth > 1024 ? 5 : 3}>
                <div className="flex items-center justify-center">
                    <Image
                        className="w-full"
                        src="/pubg-1 1.png"
                        width={130}
                        height={76}
                        objectFit="contain"
                        alt="pubg"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        className="w-full"
                        src="/download-destiny-logo-3400 1.png"
                        width={316}
                        height={73}
                        objectFit="contain"
                        alt="download-destiny-logo-3400 1"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        className="w-full"
                        src="/escape_from_tarkov_PNG17 1.png"
                        width={210}
                        height={94}
                        objectFit="contain"
                        alt="escape_from_tarkov_PNG17 1"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        className="w-full"
                        src="/apex-legends-logo 1.png"
                        width={122}
                        height={92}
                        objectFit="contain"
                        alt="apex-legends-logo 1"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        className="w-full"
                        src="/call-of-duty 1.png"
                        width={255}
                        height={50}
                        objectFit="contain"
                        alt="call_of_duty"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        className="w-full"
                        src="/escape_from_tarkov_PNG17 1.png"
                        width={210}
                        height={94}
                        objectFit="contain"
                        alt="escape_from_tarkov_PNG17 1"
                    />
                </div>
            </Carousel>
        </section>
    )
}

export default GameLogo;