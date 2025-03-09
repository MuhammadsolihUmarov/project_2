import { Locator, Page, APIResponse } from "@playwright/test";

export default class BrokenLinksPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get brokenLink(): Locator {
        return this.page.locator('a[href="https://practice-automation.com/broken-links/missing-page.html"]');
    }

    async getBrokenLinkResponse(): Promise<number> {
        const [response] = await Promise.all([
            this.page.waitForResponse((res) => res.url().includes("missing-page.html")),
            this.brokenLink.click()
        ]);
        return response.status();
    }
}
