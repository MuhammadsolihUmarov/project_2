import { Locator, Page } from "@playwright/test";

export default class ModalPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get simpleModalButton(): Locator {
        return this.page.locator("#simpleModal");
    }

    private get formModalButton(): Locator {
        return this.page.locator("#formModal");
    }

    private get simpleModalContainer(): Locator {
        return this.page.locator("#popmake-1318");
    }

    private get formModalContainer(): Locator {
        return this.page.locator("#popmake-674");
    }

    private getSimpleModalCloseButton(): Locator {
        return this.simpleModalContainer.locator(".pum-close");
    }

    private getFormModalCloseButton(): Locator {
        return this.formModalContainer.locator(".pum-close");
    }

    async openSimpleModal(): Promise<void> {
        await this.simpleModalButton.click();
        await this.simpleModalContainer.waitFor({ state: "visible" });
    }

    async openFormModal(): Promise<void> {
        await this.formModalButton.click();
        await this.formModalContainer.waitFor({ state: "visible" });
    }

    async closeSimpleModal(): Promise<void> {
        await this.getSimpleModalCloseButton().click();
        await this.simpleModalContainer.waitFor({ state: "hidden" });
    }

    async closeFormModal(): Promise<void> {
        await this.getFormModalCloseButton().click();
        await this.formModalContainer.waitFor({ state: "hidden" });
    }

    async isModalVisible(modalType: "simple" | "form"): Promise<boolean> {
        return modalType === "simple"
            ? await this.simpleModalContainer.isVisible()
            : await this.formModalContainer.isVisible();
    }
}