import { Locator, Page } from "@playwright/test";

export default class WindowPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get newTabButton(): Locator {
        return this.page.locator('button:has-text("New Tab")');
    }

    private get replaceWindowButton(): Locator {
        return this.page.locator('button:has-text("Replace Window")');
    }

    private get newWindowButton(): Locator {
        return this.page.locator('button:has-text("New Window")');
    }

    async openNewTab(): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            this.newTabButton.click(),
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    async replaceWindow(): Promise<void> {
        await this.replaceWindowButton.click();
        await this.page.waitForLoadState();
    }

    async openNewWindow(): Promise<Page> {
        const [newWindow] = await Promise.all([
            this.page.context().waitForEvent("page"),
            this.newWindowButton.click(),
        ]);
        await newWindow.waitForLoadState();
        return newWindow;
    }
}
