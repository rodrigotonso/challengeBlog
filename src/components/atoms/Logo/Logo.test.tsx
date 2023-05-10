import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Check Logo", () => {
    it("Check props", () => {
        render(
            <Logo
                src="https://www.example.com/image.png"
                alt="LogoTest"
                height={300}
                width={100}
            />
        );

        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(screen.getByAltText("LogoTest")).toBeInTheDocument();
        expect(testImage.height).toBe(300);
        expect(testImage.width).toBe(100);
        expect(testImage.src).toMatch(/example.*image.*png/i);
    });
});
