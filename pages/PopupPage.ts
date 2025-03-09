import { Locator, Page } from "@playwright/test";

export default class PopupPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get alertButton(): Locator {
        return this.page.locator("#alert");
    }

    private get toolTip(): Locator {
        return this.page.locator('//span[@class="tooltip_text show"]');
    }

    private get toolTipInitializer(): Locator {
        return this.page.locator('.tooltip_1');
    }

    private get confirmButton(): Locator {
        return this.page.locator("#confirm");
    }

    private get promptButton(): Locator {
        return this.page.locator("#prompt");
    }

    private get confirmResult(): Locator {
        return this.page.locator("#confirmResult");
    }

    private get promptResult(): Locator {
        return this.page.locator("#promptResult");
    }

    async triggerAlertPopup() {
        this.page.on("dialog", async (dialog) => {
            if (dialog.type() === "alert") {
                await dialog.accept();
            }
        });
        await this.alertButton.click();
    }

    async triggerConfirmPopup(accept: boolean) {
        this.page.on("dialog", async (dialog) => {
            if (dialog.type() === "confirm") {
                accept ? await dialog.accept() : await dialog.dismiss();
            }
        });
        await this.confirmButton.click();
    }

    async triggerPromptPopup(inputText: string) {
        this.page.on("dialog", async (dialog) => {
            if (dialog.type() === "prompt") {
                await dialog.accept(inputText);
            }
        });
        await this.promptButton.click();
    }

    async getConfirmResult(): Promise<string> {
        return (await this.confirmResult.textContent()) ?? "";
    }

    async getPromptResult(): Promise<string> {
        return (await this.promptResult.textContent()) ?? "";
    }

    async initializeTooltip(): Promise<void> {
        await this.toolTipInitializer.click();
    }

    async toolTipIsVisible(): Promise<boolean> {
        return await this.toolTip.isVisible();
    }
}
