import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImageHero from "./ImageHero";

describe("Check ImageHero", () => {
    it("Check props", () => {
        render(
            <ImageHero
                src="https://www.example.com/image.png"
                alt="ImageHeroTest"
            />
        );

        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(screen.getByAltText("ImageHeroTest")).toBeInTheDocument();
        expect(testImage.src).toMatch(/example.*image.*png/i);
    });
});
