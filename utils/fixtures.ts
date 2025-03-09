import { test as base, Page } from "@playwright/test";
import MainPage from "../pages/MainPage";
import DelaysPage from "../pages/DelaysPage";
import FormPage from "../pages/FormPage";
import PopupPage from "../pages/PopupPage";
import { SliderPage } from "../pages/SliderPage";
import CalendarPage from "../pages/CalendarPage";
import ModalPage from "../pages/ModalPage";
import TablePage from "../pages/TablePage";
import WindowPage from "../pages/WindowPage";
import HoverPage from "../pages/HoverPage";
import AdPage from "../pages/AdPage";
import DragAndDropPage from "../pages/DragAndDropPage";
import DownloadPage from "../pages/DownloadPage";
import AnimalSoundPage from "../pages/AnimalSoundPage";
import SpinnerPage from "../pages/SpinnerPage";
import FileUploadPage from "../pages/FileUploadPage";
import IframePage from "../pages/IframePage";
import BrokenImagesPage from "../pages/BrokenImagesPage";
import BrokenLinksPage from "../pages/BrokenLinksPage";
import AccordionPage from "../pages/AccordionPage";

type Fixtures = {
    mainPage: MainPage;
    delaysPage: DelaysPage;
    formPage: FormPage;
    popupPage: PopupPage;
    sliderPage: SliderPage;
    calendarPage: CalendarPage;
    modalPage: ModalPage;
    tablePage: TablePage;
    windowPage: WindowPage;
    hoverPage: HoverPage;
    adPage: AdPage;
    dragAndDropPage: DragAndDropPage;
    downloadPage: DownloadPage;
    animalSoundPage: AnimalSoundPage;
    spinnerPage: SpinnerPage;
    fileUploadPage: FileUploadPage;
    iframePage: IframePage;
    brokenImagesPage: BrokenImagesPage;
    brokenLinksPage: BrokenLinksPage;
    accordionPage: AccordionPage;
};

export const test = base.extend<Fixtures>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    delaysPage: async ({ page }, use) => {
        await use(new DelaysPage(page));
    },
    formPage: async ({ page }, use) => {
        await use(new FormPage(page));
    },
    popupPage: async ({ page }, use) => {
        await use(new PopupPage(page));
    },
    sliderPage: async ({ page }, use) => {
        await use(new SliderPage(page));
    },
    calendarPage: async ({ page }, use) => {
        await use(new CalendarPage(page));
    },
    modalPage: async ({ page }, use) => {
        await use(new ModalPage(page));
    },
    tablePage: async ({ page }, use) => {
        await use(new TablePage(page));
    },
    windowPage: async ({ page }, use) => {
        await use(new WindowPage(page));
    },
    hoverPage: async ({ page }, use) => {
        await use(new HoverPage(page));
    },
    adPage: async ({ page }, use) => {
        await use(new AdPage(page));
    },
    dragAndDropPage: async ({ page }, use) => {
        await use(new DragAndDropPage(page));
    },
    downloadPage: async ({ page }, use) => {
        await use(new DownloadPage(page));
    },
    animalSoundPage: async ({ page }, use) => {
        await use(new AnimalSoundPage(page));
    },
    spinnerPage: async ({ page }, use) => {
        await use(new SpinnerPage(page));
    },
    fileUploadPage: async ({ page }, use) => {
        await use(new FileUploadPage(page));
    },
    iframePage: async ({ page }, use) => {
        await use(new IframePage(page));
    },
    brokenImagesPage: async ({ page }, use) => {
        await use(new BrokenImagesPage(page));
    },
    brokenLinksPage: async ({ page }, use) => {
        await use(new BrokenLinksPage(page));
    },
    accordionPage: async ({ page }, use) => {
        await use(new AccordionPage(page));
    },
});
