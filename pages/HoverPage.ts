import { Locator, Page } from "@playwright/test";

export default class HoverPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get hoverElement(): Locator {
        return this.page.locator("#mouse_over");
    }

    async hoverOverElement(): Promise<void> {
        await this.hoverElement.hover();
    }

    async getElementTextColor(): Promise<string> {
        return await this.hoverElement.evaluate(el => getComputedStyle(el).color);
    }
}