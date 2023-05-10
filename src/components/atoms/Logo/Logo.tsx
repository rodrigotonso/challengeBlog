import React, { FC } from "react";
import Image from "next/image";
import TEXT from "../../../constants/i18n.js";

type LogoProps = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
};

const Logo: FC<LogoProps> = ({ src, alt, width, height }) => {
    return (
        <Image
            src={src}
            alt={alt || TEXT.components.altLogo}
            width={width || 180}
            height={height || 60}
        />
    );
};

export default Logo;
