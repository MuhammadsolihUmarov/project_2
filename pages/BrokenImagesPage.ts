import { Locator, Page } from "@playwright/test";

export default class BrokenImagesPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get validImage(): Locator {
        return this.page.locator('img[alt="JavaScript Logo | JavaScript Language Logo | JavaScript"]');
    }

    private get brokenImages(): Locator {
        return this.page.locator('img[alt^="Broken Image"]');
    }

    async isValidImageDisplayed(): Promise<boolean> {
        return await this.validImage.evaluate((img) => img.naturalWidth > 0);
    }

    async areBrokenImagesDisplayed(): Promise<boolean[]> {
        return await this.brokenImages.evaluateAll((imgs) => imgs.map(img => img.naturalWidth === 0));
    }
}
