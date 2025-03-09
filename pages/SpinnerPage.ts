import { Locator, Page } from "@playwright/test";

export default class SpinnerPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get getSpinner(): Locator {
        return this.page.locator('//div[@class="spinner"]');
    }

    async isSpinnerVisible(): Promise<boolean> {
        return await this.getSpinner.isVisible();
    }
}