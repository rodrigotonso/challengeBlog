import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MenuButton from "./MenuButton";

describe("Check MenuButton", () => {
    it("Check props", () => {
        render(
            <MenuButton
                text="Menu"
                open={true}
                handleClick={() => console.log("MenuButton")}
            />
        );

        expect(screen.getByText("Menu")).toBeInTheDocument();
    });
});
