import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("Check SearchInput Find Ok", () => {
    const options = ["Option1", "Option2", "Option3"];
    it("Check props", () => {
        const user = MouseEvent;
        render(
            <SearchInput
                options={options}
                handleChange={(value) => console.log(value)}
            />
        );
        const searchInput = screen.getByLabelText("Search...");
        fireEvent.change(searchInput, { value: "Option2" });
        fireEvent.keyDown(searchInput, { key: "ArrowDown" });
        fireEvent.keyDown(searchInput, { key: "Enter" });

        expect(screen.getByText("Option2")).toBeInTheDocument();
    });
});
