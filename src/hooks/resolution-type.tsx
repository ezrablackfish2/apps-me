import { useEffect, useState } from "react";

import { useWindowDimensions } from "@hooks";

enum ResolutionType {
    DESKTOP,
    MOBILE
}

function getWindowResolutionType(width: number): ResolutionType {
    return width < 1024
            ? ResolutionType.MOBILE
            : ResolutionType.DESKTOP;
}

function useWindowResolutionType(): ResolutionType {
    const windowWidth: number = useWindowDimensions().width;
    const [resolutionType, setResolutionType] = useState(getWindowResolutionType(windowWidth));

    useEffect(() => {
        setResolutionType(getWindowResolutionType(windowWidth));
    });

    return resolutionType;
}

export { useWindowResolutionType, ResolutionType };