import { Locator, Page } from "@playwright/test";

export default class FileUploadPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get fileInput(): Locator {
        return this.page.locator("#file-upload");
    }

    private get uploadButton(): Locator {
        return this.page.locator("#upload-btn");
    }

    private get responseMessage(): Locator {
        return this.page.locator(".wpcf7-response-output");
    }

    async uploadFile(filePath: string): Promise<void> {
        await this.fileInput.setInputFiles(filePath);
        await this.uploadButton.click();
    }

    async getResponseMessage(): Promise<string> {
        return await this.responseMessage.textContent() ?? "";
    }
}
