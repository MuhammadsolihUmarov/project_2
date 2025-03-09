import { Locator, Page } from "@playwright/test";

export default class AnimalSoundPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get catButton(): Locator {
        return this.page.locator('button:has-text("Cat")');
    }

    private get dogButton(): Locator {
        return this.page.locator('button:has-text("Dog")');
    }

    private get pigButton(): Locator {
        return this.page.locator('button:has-text("Pig")');
    }

    private get cowButton(): Locator {
        return this.page.locator('button:has-text("Cow")');
    }

    private get displayedText(): Locator {
        return this.page.locator('#demo');
    }

    async clickCatButton(): Promise<void> {
        await this.catButton.click();
    }

    async clickDogButton(): Promise<void> {
        await this.dogButton.click();
    }

    async clickPigButton(): Promise<void> {
        await this.pigButton.click();
    }

    async clickCowButton(): Promise<void> {
        await this.cowButton.click();
    }

    async getDisplayedText(): Promise<string> {
        return await this.displayedText.textContent() ?? "";
    }
}
