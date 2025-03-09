import { Locator, Page, FrameLocator } from "@playwright/test";

export default class IframePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get topIframe(): FrameLocator {
        return this.page.frameLocator("#iframe-1");
    }

    private get bottomIframe(): FrameLocator {
        return this.page.frameLocator("#iframe-2");
    }

    private get topIframeHeading(): Locator {
        return this.topIframe.locator("h1");
    }

    private get bottomIframeHeading(): Locator {
        return this.bottomIframe.locator("h1");
    }

    async getTopIframeHeadingText(): Promise<string> {
        return await this.topIframeHeading.textContent() ?? "";
    }

    async getBottomIframeHeadingText(): Promise<string> {
        return await this.bottomIframeHeading.textContent() ?? "";
    }
}
