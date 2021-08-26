import React from 'react';

import Image from "next/image";
import StepWithText from "./steps";
import sws from '../assets/usersJourney.png'
const steps = [
    {
        id: 1,
        imgSrc: "/step1.svg",
        desc: <>Find a COACH and <br/> perfect your skills</>
    },
    {
        id: 2,
        imgSrc: "/step2.svg",
        desc: <>Create your own NFTs <br/> as collectibles to <br/> track your progress</>
    },
    {
        id: 3,
        imgSrc: "/step3.svg",
        desc: <>Take part in live <br/> TOURNAMENTS and  <br/> earn crypto</>
    },
    {
        id: 4,
        imgSrc: "/step4.svg",
        desc: <>BECOME A PRO</>
    },
]

const Banner = () => {
    return (
        <div className={`w-full overflow-x-hidden w-full overflow-x-hidden`} style={{background: '#030115'}}>
            <div className={`hidden md:block`}
            >
                <Image
                    src={sws}
                    alt={'sequence section'}
                    width={2208}
                    height={1168}
                    objectFit={'cover'}
                    layout={'intrinsic'}
                />
            </div>

            <div className={`md:hidden`}>
                <div className={`flex space-y-50px pb-[3rem] flex-col items-center justify-center`}>
                    {
                        steps.map(({id, desc, imgSrc}) => (
                            <StepWithText
                                key={id}
                                desc={desc}
                                imgSrc={imgSrc}
                            />
                        ))
                    }


                </div>
            </div>
            <div>
                <h1 style={{fontSize:'28px'}} className="text-white text-center pt-8 pb-4">Search User</h1>
                <div style={{textAlign:'center',paddingBottom:'50px'}}>
                    <input style={{background: '#211F2F',borderRadius: '35px',outline:'none',height:'45px',width:'40%',color:'white'}} className="px-4" type="text" placeholder="Search user" />
                    <button style={{
                        background: 'linear-gradient(270deg, #FF7505 7.01%, #F0C146 90.15%)',
                        borderRadius: '10px',
                        padding:'5px 30px',
                        marginLeft:'40px',
                        color:'#030115',
                        fontSize:'28px',
                        fontWeight:'500',
                        outline:'none'
                    }}>Create NFT</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;