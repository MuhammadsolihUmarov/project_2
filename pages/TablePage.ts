import { Locator, Page } from "@playwright/test";

export default class TablePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private get simpleTable(): Locator {
        return this.page.locator("table"); // Assuming only one simple table exists
    }

    private get sortableTable(): Locator {
        return this.page.locator("#tablepress-1");
    }

    private get searchBox(): Locator {
        return this.page.locator("#dt-search-0");
    }

    private get paginationNext(): Locator {
        return this.page.locator(".dt-paging-button.next");
    }

    private get paginationPrev(): Locator {
        return this.page.locator(".dt-paging-button.previous");
    }

    private get allTableRows(): Locator {
        return this.sortableTable.locator("tbody tr");
    }

    private get sortButtons(): Locator {
        return this.sortableTable.locator("th span.dt-column-title");
    }

    async getItemPrice(item: string): Promise<string | null> {
        const row = this.simpleTable.locator(`tr:has(td:text-is("${item}"))`);
        return row.locator("td:nth-child(2)").textContent();
    }

    async searchCountry(country: string): Promise<void> {
        await this.searchBox.fill(country);
    }

    async getPopulationByCountry(country: string): Promise<string | null> {
        const row = this.allTableRows.locator(`td:text-is("${country}")`);
        return row.locator("xpath=following-sibling::td").textContent();
    }

    async sortBy(column: "Rank" | "Country" | "Population (million)"): Promise<void> {
        await this.sortButtons.filter({ hasText: column }).click();
    }

    async paginateToNext(): Promise<void> {
        if (await this.paginationNext.isEnabled()) {
            await this.paginationNext.click();
        }
    }

    async paginateToPrev(): Promise<void> {
        if (await this.paginationPrev.isEnabled()) {
            await this.paginationPrev.click();
        }
    }
}
