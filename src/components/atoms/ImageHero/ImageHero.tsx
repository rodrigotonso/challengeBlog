import React, { FC } from "react";
import Image from "next/image";
import TEXT from "../../../constants/i18n.js";

type ImageHeroProps = {
    src: string;
    alt?: string;
};

const ImageHero: FC<ImageHeroProps> = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt || TEXT.components.altImageHero}
            quality={100}
            fill={true}
        />
    );
};

export default ImageHero;
