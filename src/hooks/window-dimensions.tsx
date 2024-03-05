import { useState, useEffect } from "react";

interface WindowDimensions {
    height: number;
    width: number;
}

const isBrowser = typeof window !== "undefined"

function getWindowDimensions(): WindowDimensions {
    if(isBrowser) {
        const { innerHeight: height, innerWidth: width } = window;
    
        return {
            height,
            width
        };
    }

    return { height: 0, width: 0 };
}

function useWindowDimensions(): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(getWindowDimensions());
        }

        if(isBrowser) {
            window.addEventListener('resize', handleResize);
        }
    
        return () => {
            if(isBrowser) {
                window.removeEventListener('resize', handleResize);
            }
        }
    });

    return windowDimensions;
}

export { useWindowDimensions, WindowDimensions };