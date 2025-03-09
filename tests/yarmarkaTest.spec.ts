import { test } from "../utils/fixtures";
import FilePathManager from "../utils/filePathManager";
import {expect} from "@playwright/test";


test.describe("Yarmarka :)", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("main page has title", async ({mainPage}) => {
    await expect(mainPage.isTitleVisible()).resolves.toBeTruthy();
  });

  test("javascript delays", async ({mainPage, delaysPage}) => {
    await mainPage.clickJavascriptDelays();
    await delaysPage.clickStartButton();
    const liftOff = await delaysPage.getLiftoffText();
    expect(liftOff).toEqual("Liftoff!");
  });

  test("should fill and submit the form", async ({mainPage, formPage}) => {
    await mainPage.clickFormFields();
    await formPage.fillName("John Doe");
    await formPage.fillPassword("SecurePass123!");
    await formPage.selectDrink("Coffee");
    await formPage.selectColor("Blue");
    await formPage.selectAutomationPreference("yes");
    await formPage.fillEmail("johndoe@example.com");
    await formPage.fillMessage("This is a test message.");
    await formPage.handleAlert();
    await formPage.submitForm();
  });

  test("should handle alert popup", async ({mainPage, popupPage}) => {
    await mainPage.clickPopUps();
    await popupPage.triggerAlertPopup();
  });

  test("should handle confirm popup - accept", async ({mainPage, popupPage}) => {
    await mainPage.clickPopUps();
    await popupPage.triggerConfirmPopup(true);
    await expect(popupPage.getConfirmResult()).resolves.toContain("OK");
  });

  test("should handle confirm popup - dismiss", async ({mainPage, popupPage}) => {
    await mainPage.clickPopUps();
    await popupPage.triggerConfirmPopup(false);
    await expect(popupPage.getConfirmResult()).resolves.toContain("Cancel");
  });

  test("should handle prompt popup", async ({mainPage, popupPage}) => {
    await mainPage.clickPopUps();
    const inputText = "Playwright Test";
    await popupPage.triggerPromptPopup(inputText);
    await expect(popupPage.getPromptResult()).resolves.toContain(inputText);
  });

  test("should handle tooltip", async ({mainPage, popupPage}) => {
    await mainPage.clickPopUps();
    await popupPage.initializeTooltip();
    await expect(popupPage.toolTipIsVisible()).resolves.toBeTruthy();
  });

  test("should move slider and verify value", async ({mainPage, sliderPage }) => {
    await mainPage.clickSliders();
    await sliderPage.moveSlider(50);

    const displayedValue = await sliderPage.getSliderValue();
    expect(displayedValue).toBe("100");
  });

  test("Select a date from the calendar", async ({mainPage, calendarPage }) => {
    await mainPage.clickCalendars();
    await calendarPage.openDatepicker();

    await calendarPage.pickDate('March', '2025', '13');

    const selectedDate = await calendarPage.getChosenDate();
    expect(selectedDate).toContain('2025-03-13');
  });

  test("Open and close simple modal", async ({mainPage, modalPage}) => {
    await mainPage.clickModals();

    await modalPage.openSimpleModal();
    expect(await modalPage.isModalVisible("simple")).toBeTruthy();

    await modalPage.closeSimpleModal();
    expect(await modalPage.isModalVisible("simple")).toBeFalsy();
  });

  test("Open and close form modal", async ({mainPage, modalPage}) => {
    await mainPage.clickModals();

    await modalPage.openFormModal();
    expect(await modalPage.isModalVisible("form")).toBeTruthy();

    await modalPage.closeFormModal();
    expect(await modalPage.isModalVisible("form")).toBeFalsy();
  });

  test("Retrieve item price from simple table", async ({mainPage, tablePage }) => {
    await mainPage.clickTables();
    const price = await tablePage.getItemPrice("Laptop");
    expect(price).toBe("$1200.00");
  });

  test("Search and get population for a country", async ({mainPage, tablePage }) => {
    await mainPage.clickTables();
    await tablePage.searchCountry("India");
    const population = await tablePage.getPopulationByCountry("India");
    expect(population).toBe("1,429");
  });

  test("Sort table by Population", async ({mainPage, tablePage }) => {
    await mainPage.clickTables();
    await tablePage.sortBy("Population (million)");
  });

  test("Open a new tab and verify its URL", async ({mainPage, windowPage, page }) => {
    await mainPage.clickWindowOperations();

    const newTab = await windowPage.openNewTab();
    expect(await newTab.url()).not.toBe(page.url());
  });

  test("Replace current window and verify URL change", async ({mainPage, windowPage, page }) => {
    await mainPage.clickWindowOperations();

    const oldUrl = page.url();
    await windowPage.replaceWindow();
    expect(await page.url()).not.toBe(oldUrl);
  });

  test("Open a new window and verify its title", async ({mainPage, windowPage }) => {
    await mainPage.clickWindowOperations();

    const newWindow = await windowPage.openNewWindow();
    expect(await newWindow.title()).not.toBe("");
  });

  test("Hover over element and verify style changes", async ({ mainPage, hoverPage }) => {
    await mainPage.clickHover();

    const initialColor = await hoverPage.getElementTextColor();
    await hoverPage.hoverOverElement();
    const hoveredColor = await hoverPage.getElementTextColor();

    expect(hoveredColor).not.toBe(initialColor);
  });

  test("Handle ad modal popup", async ({ mainPage, adPage }) => {
    await mainPage.clickAds();

    await adPage.waitForAdToAppear();
    expect(await adPage.isAdVisible()).toBeTruthy();

    let adText = await adPage.getAdText();
    expect(adText.trim()).toEqual("Hi");
  });

  test("Drag the box to a new location", async ({ mainPage, dragAndDropPage }) => {
    await mainPage.clickGestures();

    await dragAndDropPage.dragBoxByOffset(100, 1000);
  });

  test("Drag and drop image", async ({ mainPage, dragAndDropPage, page }) => {
    await mainPage.clickGestures();

    await mainPage.scrollDown500();
    await page.waitForTimeout(1000);
    await dragAndDropPage.dragImageToDropZone2();

    await page.waitForTimeout(1000);
    expect(await dragAndDropPage.isImageInDropZone2()).toBeTruthy();
  });

  test("Drag the map", async ({ mainPage, dragAndDropPage, page }) => {
    await mainPage.clickGestures();

    await page.waitForTimeout(1000)
    await mainPage.scrollDown500();
    await dragAndDropPage.dragMap();
  });

  test("Download a normal file", async ({ mainPage, downloadPage, page }) => {
    await mainPage.clickFileDownload()

    await page.waitForTimeout(1000);
    const filePath = await downloadPage.downloadNormalFile();
    expect(filePath).not.toBe('');
  });

  test("Verify cat button displays correct sound", async ({ mainPage, animalSoundPage }) => {
    await mainPage.clickClickEvents()

    await animalSoundPage.clickCatButton();
    expect(await animalSoundPage.getDisplayedText()).toBe("Meow!");
  });

  test("Verify dog button displays correct sound", async ({ mainPage, animalSoundPage }) => {
    await mainPage.clickClickEvents()

    await animalSoundPage.clickDogButton();
    expect(await animalSoundPage.getDisplayedText()).toBe("Woof!");
  });

  test("Verify pig button displays correct sound", async ({ mainPage, animalSoundPage }) => {
    await mainPage.clickClickEvents()

    await animalSoundPage.clickPigButton();
    expect(await animalSoundPage.getDisplayedText()).toBe("Oink!");
  });

  test("Verify cow button displays correct sound", async ({ mainPage, animalSoundPage }) => {
    await mainPage.clickClickEvents()

    await animalSoundPage.clickCowButton();
    expect(await animalSoundPage.getDisplayedText()).toBe("Moo!");
  });

  test("Verify Spinner is visible once entered the page", async ({ mainPage, spinnerPage }) => {
    await mainPage.clickSpinners()

    let spinnerIsVisible = await spinnerPage.isSpinnerVisible();
    expect(spinnerIsVisible).toBeTruthy();
  });

  test("Verify file upload with valid file", async ({ mainPage, fileUploadPage, page }) => {
    await mainPage.clickFileUpload();

    const filePath = FilePathManager.getFilePath("sample1.pdf");
    await fileUploadPage.uploadFile(filePath);

    await page.waitForTimeout(3000);
    expect(await fileUploadPage.getResponseMessage()).toContain(
        "Thank you for your message. It has been sent."
    );
  });

  test("Verify file upload fails for unsupported file type", async ({ mainPage, fileUploadPage, page }) => {
    await mainPage.clickFileUpload();

    const filePath = FilePathManager.getFilePath("sample2.py");
    await fileUploadPage.uploadFile(filePath);

    await page.waitForTimeout(3000);
    expect(await fileUploadPage.getResponseMessage()).toContain(
        "One or more fields have an error. Please check and try again."
    );
  });

  test("Verify file upload fails for file exceeding size limit", async ({ mainPage, fileUploadPage, page }) => {
    await mainPage.clickFileUpload();

    const filePath = FilePathManager.getFilePath("sample3.pdf");
    await fileUploadPage.uploadFile(filePath);

    await page.waitForTimeout(5000);
    expect(await fileUploadPage.getResponseMessage()).toContain(
        "One or more fields have an error. Please check and try again."
    );
  });

  test("Verify content inside the top iframe", async ({ mainPage, iframePage }) => {
    await mainPage.clickIframes()

    expect(await iframePage.getTopIframeHeadingText()).toContain("Playwright");
  });

  test("Verify content inside the bottom iframe", async ({ mainPage, iframePage }) => {
    await mainPage.clickIframes()

    expect(await iframePage.getBottomIframeHeadingText()).toContain("Selenium");
  });

  test("Verify valid image is displayed", async ({ mainPage, brokenImagesPage, page }) => {
    await mainPage.clickBrokenImages()

    await page.waitForTimeout(1000);
    expect(await brokenImagesPage.isValidImageDisplayed()).toBeTruthy();
  });

  test("Verify broken images are not displayed", async ({ mainPage, brokenImagesPage, page }) => {
    await mainPage.clickBrokenImages()

    await page.waitForTimeout(1000);
    const brokenImageResults = await brokenImagesPage.areBrokenImagesDisplayed();
    expect(brokenImageResults).toContain(true);
  });

  test("Verify broken link returns 404", async ({ mainPage, brokenLinksPage }) => {
    await mainPage.clickBrokenLinks()

    const responseCode = await brokenLinksPage.getBrokenLinkResponse();
    expect(responseCode).toBe(404);
  });

  test("Verify text appears after accordion is clicked", async ({ mainPage, accordionPage }) => {
    await mainPage.clickAccordions()

    await accordionPage.expandAccordion();
    let accordionText = await accordionPage.getAccordionText();
    expect(accordionText.trim()).toBe("This is an accordion item.");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});