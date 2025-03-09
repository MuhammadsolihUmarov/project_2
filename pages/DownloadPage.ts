import { Locator, Page } from "@playwright/test";

export default class DownloadFilePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get normalDownloadButton(): Locator {
        return this.page.locator('//a[@class="wpdm-download-link download-on-click btn btn-primary "]');
    }

    async downloadNormalFile(): Promise<string> {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.normalDownloadButton.click()
        ]);

        return await download.path() ?? '';
    }
}
