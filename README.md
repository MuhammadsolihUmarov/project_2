# Playwright Automation Framework

## Project Structure

```
Project
│── tests/                   # Currently all tests are written in one file
│   ├── yarmarkaTest.spec.ts
│   ├── ...
│
│── pages/                   # Page Object Model (POM) used
│   ├── MainPage.ts
│   ├── FormPage.ts
│   ├── ModalPage.ts
│   ├── ...
│
│── utils/                   # Utility functions
│   ├── filePathManager.ts
│   ├── fixtures.ts
│
│── playwright.config.ts      # Playwright configuration
│── package.json              # Project dependencies
│── README.md                 # Project documentation
```

## Installation

```sh
npm install
```

## Running Tests

```sh
npx playwright test
```

Run tests in headed mode:

```sh
npx playwright test --headed
```

Run specific test file:

```sh
npx playwright test tests/test1.spec.ts
```

## Generating Reports

```sh
npx playwright show-report
```

## Debugging

```sh
npx playwright test --debug
```

## Updating Browsers

```sh
npx playwright install
