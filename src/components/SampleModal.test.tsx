import "@testing-library/jest-dom";

import { render, within } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { screen, waitFor } from "@testing-library/react";
import { describe } from "node:test";
import { SampleModal } from "./SampleModal";

describe("SampleModal", () => {
    test("open modal and close", async () => {
        const tree = render(<SampleModal />)
        
        const button = screen.getByRole("button", { name: "Open" })

       const modal =  within(tree.container.ownerDocument.body).getByRole("dialog")
        // const modal = screen.getByRole("dialog")

        await userEvent.click(button)

        await waitFor(() => {
            expect(modal).toBeVisible();
        });

        const closeButton = within(modal).getByRole("button", { name: "Close" })

        await userEvent.click(closeButton)

        await waitFor(() => {
            expect(modal).not.toBeVisible();
            // - display: none;
            // + display: block;
            // expect(modal).toHaveStyle({ display: "none" });
        });
    })
})