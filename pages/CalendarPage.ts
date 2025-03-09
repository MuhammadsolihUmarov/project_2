import { Locator, Page } from "@playwright/test";

export default class CalendarPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get datepicker(): Locator {
        return this.page.locator("#ui-datepicker-div");
    }

    private get datepickerInput(): Locator {
        return this.page.locator("#g1065-2-1-selectorenteradate");
    }

    private get nextButton(): Locator {
        return this.datepicker.locator(".ui-datepicker-next");
    }

    private get monthYearLabel(): Locator {
        return this.datepicker.locator(".ui-datepicker-title");
    }

    private getDateElement(date: string): Locator {
        return this.datepicker.locator(`//a[@class="ui-state-default" and text()="${date}"]`);
    }

    async openDatepicker(): Promise<void> {
        await this.datepickerInput.click();
        await this.datepicker.waitFor({ state: "visible" });
    }

    async selectDate(date: string): Promise<void> {
        await this.getDateElement(date).click();
    }

    async navigateToMonth(targetMonth: string, targetYear: string): Promise<void> {
        let attempts = 0;
        while (attempts < 12) {
            const currentLabel = await this.monthYearLabel.textContent();
            if (currentLabel?.includes(targetMonth) && currentLabel.includes(targetYear)) break;
            await this.nextButton.click();
            await this.page.waitForTimeout(300);
            attempts++;
        }
    }

    async pickDate(month: string, year: string, day: string): Promise<void> {
        await this.openDatepicker();
        await this.navigateToMonth(month, year);
        await this.selectDate(day);
    }

    async getChosenDate() {
        return await this.datepickerInput.inputValue();
    }
}
