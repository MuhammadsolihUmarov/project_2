import { Locator, Page } from "@playwright/test";

export default class FormPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get nameInput(): Locator {
        return this.page.locator("#name-input");
    }

    private get passwordInput(): Locator {
        return this.page.locator("input[type='password']");
    }

    private get drinkCheckboxes(): Locator {
        return this.page.locator("input[name='fav_drink']");
    }

    private get colorRadios(): Locator {
        return this.page.locator("input[name='fav_color']");
    }

    private get automationDropdown(): Locator {
        return this.page.locator("#automation");
    }

    private get emailInput(): Locator {
        return this.page.locator("#email");
    }

    private get messageTextarea(): Locator {
        return this.page.locator("#message");
    }

    private get submitButton(): Locator {
        return this.page.locator("#submit-btn");
    }

    async fillName(name: string) {
        await this.nameInput.fill(name);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async selectDrink(drink: string) {
        await this.page.locator(`input[name="fav_drink"][value="${drink}"]`).check();
    }

    async selectColor(color: string) {
        await this.page.locator(`input[name="fav_color"][value="${color}"]`).check();
    }

    async selectAutomationPreference(option: string) {
        await this.automationDropdown.selectOption(option);
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillMessage(message: string) {
        await this.messageTextarea.fill(message);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async handleAlert() {
        this.page.on("dialog", async (dialog) => {
            if (dialog.message() === "Message received!") {
                await dialog.accept();
            } else {
                await dialog.dismiss();
            }
        });
    }
}
