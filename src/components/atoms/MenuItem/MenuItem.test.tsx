import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("Check MenuItem", () => {
    it("Check props", () => {
        render(
            <MenuItem
                text="About us"
                handleClick={() => console.log("MenuItem")}
            />
        );

        expect(screen.getByText("About us")).toBeInTheDocument();
    });
});
