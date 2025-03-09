import {Locator, Page} from "@playwright/test";

export default class DelaysPage {
    private page: Page;
    private readonly liftoffText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.liftoffText = this.page.locator('#delay');
    }

    private get startButton(): Locator {
        return this.page.locator("#start");
    }

    private async waitForLiftoff(): Promise<void> {
        await this.liftoffText.waitFor({ state: 'attached' });
        await this.page.waitForFunction(
            (selector) => document.querySelector(selector)?.value === 'Liftoff!','#delay');
    }

    async clickStartButton(): Promise<this> {
        await this.startButton.click();
        return this;
    }

    async getLiftoffText(): Promise<string> {
        await this.waitForLiftoff();
        return await this.liftoffText.inputValue();
    }
}