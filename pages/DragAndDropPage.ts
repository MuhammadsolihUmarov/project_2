import { Locator, Page } from "@playwright/test";

export default class DragAndDropPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get draggableImage(): Locator {
        return this.page.locator("#dragMe");
    }

    private get dropZone2(): Locator {
        return this.page.locator("#div2");
    }

    private get mapCanvas(): Locator {
        return this.page.locator(".syrup-canvas");
    }

    private get draggableBoxHeader(): Locator {
        return this.page.locator("#moveMeHeader");
    }

    async dragBoxByOffset(xOffset: number, yOffset: number): Promise<void> {
        await this.draggableBoxHeader.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(xOffset, yOffset);
        await this.page.mouse.up();
    }

    async dragImageToDropZone2(): Promise<void> {
        const sourceBox = this.draggableImage;
        const targetBox = this.dropZone2;

        const sourceBoundingBox = await sourceBox.boundingBox();
        const targetBoundingBox = await targetBox.boundingBox();

        if (!sourceBoundingBox || !targetBoundingBox) {
            throw new Error("Could not retrieve bounding boxes for drag operation.");
        }
        await this.page.mouse.move(
            sourceBoundingBox.x + sourceBoundingBox.width / 2,
            sourceBoundingBox.y + sourceBoundingBox.height / 2
        );
        await this.page.mouse.down();

        await this.page.mouse.move(
            targetBoundingBox.x + targetBoundingBox.width / 2,
            targetBoundingBox.y + targetBoundingBox.height / 2
        );

        await this.page.mouse.up();
    }

    async isImageInDropZone2(): Promise<boolean> {
        return await this.dropZone2.locator("img").isVisible();
    }

    async dragMap(): Promise<void> {
        const mapElement = this.mapCanvas;
        const boundingBox = await mapElement.boundingBox();

        if (!boundingBox) {
            throw new Error("Map bounding box not found.");
        }

        const startX = boundingBox.x + boundingBox.width / 2;
        const startY = boundingBox.y + boundingBox.height / 2;

        await this.page.mouse.move(startX, startY);
        await this.page.mouse.down();
        await this.page.mouse.move(startX - 100, startY - 100); // Move diagonally
        await this.page.mouse.up();
    }
}
