import { Locator, Page } from "@playwright/test";

export default class AccordionPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get accordionButton(): Locator {
        return this.page.locator('.wp-block-coblocks-accordion-item__title');
    }

    private get accordionContent(): Locator {
        return this.page.locator('.wp-block-coblocks-accordion-item__content');
    }

    async expandAccordion(): Promise<void> {
        await this.accordionButton.click();
    }

    async getAccordionText(): Promise<string> {
        return await this.accordionContent.textContent() ?? "";
    }
}
