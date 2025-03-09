import { Locator, Page } from '@playwright/test';
import DelaysPage from "./DelaysPage";

export default class MainPage {
    private page: Page;
    private title = "//h1[@class='wp-block-heading']/strong";
    private get javascriptDelaysButton() { return this.page.locator("//a[@href='https://practice-automation.com/javascript-delays/']"); }
    private get formFieldsButton() { return this.page.locator("//a[@href='https://practice-automation.com/form-fields/']"); }
    private get popUpsButton() { return this.page.locator("//a[@href='https://practice-automation.com/popups/']"); }
    private get slidersButton() { return this.page.locator("//a[@href='https://practice-automation.com/slider/']"); }
    private get calendarsButton() { return this.page.locator("//a[@href='https://practice-automation.com/calendars/']"); }
    private get modalsButton() { return this.page.locator("//a[@href='https://practice-automation.com/modals/']"); }
    private get tablesButton() { return this.page.locator("//a[@href='https://practice-automation.com/tables/']"); }
    private get windowOperationsButton() { return this.page.locator("//a[@href='https://practice-automation.com/window-operations/']"); }
    private get hoverButton() { return this.page.locator("//a[@href='https://practice-automation.com/hover/']"); }
    private get adsButton() { return this.page.locator("//a[@href='https://practice-automation.com/ads/']"); }
    private get gesturesButton() { return this.page.locator("//a[@href='https://practice-automation.com/gestures/']"); }
    private get fileDownloadButton() { return this.page.locator("//a[@href='https://practice-automation.com/file-download/']"); }
    private get clickEventsButton() { return this.page.locator("//a[@href='https://practice-automation.com/click-events/']"); }
    private get spinnersButton() { return this.page.locator("//a[@href='https://practice-automation.com/spinners/']"); }
    private get fileUploadButton() { return this.page.locator("//a[@href='https://practice-automation.com/file-upload/']"); }
    private get iframesButton() { return this.page.locator("//a[@href='https://practice-automation.com/iframes/']"); }
    private get brokenImagesButton() { return this.page.locator("//a[@href='https://practice-automation.com/broken-images/']"); }
    private get brokenLinksButton() { return this.page.locator("//a[@href='https://practice-automation.com/broken-links/']"); }
    private get accordionsButton() { return this.page.locator("//a[@href='https://practice-automation.com/accordions/']"); }



    constructor(page: Page) {
        this.page = page;
    }

    scrollDown500() {
        return this.page.mouse.wheel(0, 500);
    }

    async isTitleVisible(): Promise<boolean> {
        return this.page.locator(this.title).isVisible();
    }

    async clickJavascriptDelays() {
        await this.javascriptDelaysButton.click();
    }

    async clickFormFields() {
        await this.formFieldsButton.click();
    }

    async clickPopUps() {
        await this.popUpsButton.click();
    }

    async clickSliders() {
        await this.slidersButton.click();
    }

    async clickCalendars() {
        await this.calendarsButton.click();
    }

    async clickModals() {
        await this.modalsButton.click();
    }

    async clickTables() {
        await this.tablesButton.click();
    }

    async clickWindowOperations() {
        await this.windowOperationsButton.click();
    }

    async clickHover() {
        await this.hoverButton.click();
    }

    async clickAds() {
        await this.adsButton.click();
    }

    async clickGestures() {
        await this.gesturesButton.click();
    }

    async clickFileDownload() {
        await this.fileDownloadButton.click();
    }

    async clickClickEvents() {
        await this.clickEventsButton.click();
    }

    async clickSpinners() {
        await this.spinnersButton.click();
    }

    async clickFileUpload() {
        await this.fileUploadButton.click();
    }

    async clickIframes() {
        await this.iframesButton.click();
    }

    async clickBrokenImages() {
        await this.brokenImagesButton.click();
    }

    async clickBrokenLinks() {
        await this.brokenLinksButton.click();
    }

    async clickAccordions() {
        await this.accordionsButton.click();
    }
}