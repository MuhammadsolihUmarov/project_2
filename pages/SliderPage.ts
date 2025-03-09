import { Page, Locator } from "@playwright/test";

export class SliderPage {
    readonly page: Page;
    readonly slider: Locator;
    readonly valueDisplay: Locator;

    constructor(page: Page) {
        this.page = page;
        this.slider = page.locator("#slideMe");
        this.valueDisplay = page.locator("#value");
    }

    async moveSlider(value: number) {
        await this.slider.click();

        for (let i = 0; i < value; i++) {
            await this.page.keyboard.press("ArrowRight");
        }
    }

    async getSliderValue(): Promise<string> {
        return this.valueDisplay.innerText();
    }
}
