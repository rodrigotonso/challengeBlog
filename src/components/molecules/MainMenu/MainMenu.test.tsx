import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainMenu from "./MainMenu";

describe("Check MainMenu", () => {
    const Options = [
        { text: "first", handleClick: () => console.log("first") },
        { text: "second", handleClick: () => console.log("second") },
        { text: "third", handleClick: () => console.log("third") },
    ];
    it("Check props", async () => {
        render(<MainMenu options={Options} />);
        expect(screen.getByText("Menu")).toBeInTheDocument();
    });
});
