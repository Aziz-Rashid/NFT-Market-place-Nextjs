import React from 'react';
import Image from "next/image";

const StepWithText = ({desc,imgSrc}) => {
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <Image
                src={imgSrc}
                alt={'Step 1'}
                layout={'intrinsic'}
                width={260}
                height={260}
            />
            <div className={`text-25px text-center text-white mt-4`}>
                {desc}
            </div>
        </div>
    );
};

export default StepWithText;