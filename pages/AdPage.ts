import { Locator, Page } from "@playwright/test";

export default class AdPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get adModal(): Locator {
        return this.page.locator("#pum_popup_title_1272");
    }

    private get adModalTitle(): Locator {
        return this.page.locator("#pum_popup_title_1272");
    }

    async waitForAdToAppear(timeout = 7000): Promise<void> {
        await this.adModal.waitFor({ state: "visible", timeout });
    }

    async getAdText() {
        return this.adModalTitle.textContent();
    }

    async isAdVisible(): Promise<boolean> {
        return await this.adModal.isVisible();
    }
}
