import { useEffect, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import { useSwipeable } from "react-swipeable";

const Carousel = ({ children, show }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (currentIndex < (length - show)) {
                setCurrentIndex(prevState => prevState + 1);
            }
        },
        onSwipedRight: () => {
            if (currentIndex > 0) {
                setCurrentIndex(prevState => prevState - 1);
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    useEffect(() => {
        setLength(children.length);
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    }

    return (
        <div className="flex flex-col w-full">
            <div className="relative flex items-center w-full">
                <ChevronLeftIcon style={{width:'5%'}} onClick={prev} className={`w-50px h-50px md:w-90px md:h-90px ${currentIndex > 0 ? "cursor-pointer text-white" : "text-green-900"}`} />
                <div className="w-full h-full overflow-hidden">
                    <div
                        {...handlers}
                        className={`transition-all ease-linear duration-200 scrollbar-hide flex items-center carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                <ChevronRightIcon style={{width:'5%'}} onClick={next} className={`w-50px h-50px md:w-90px md:h-90px ${currentIndex < (length - show) ? "cursor-pointer text-white" : "text-green-900"}`} />
            </div>
        </div>
    )
}

export default Carousel;