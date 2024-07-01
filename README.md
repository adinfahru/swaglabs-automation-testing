# E-Commerce Mockup Website Testing using Cucumber.js with Selenium Web Automation Framework

This repository contains a web automation framework using Cucumber.js and Selenium WebDriver.

## Prerequisites

Before you get started, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (with npm)
- [Web Browser Drivers](https://www.selenium.dev/documentation/en/webdriver/driver_requirements/) (e.g., ChromeDriver for Chrome)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/adinfahru/swaglabs-automation-testing
   cd swaglabs-automation-testing
   ```

2. Install dependencies `npm install`

## Folder Structure
- features/scenario: Directory for your Gherkin feature files.
- features/step_definitions: Directory for your Cucumber.js step definitions.
- support: Directory for supporting files and utilities.

For your convenient please put the file based on the folder structure.

```
|--features
│   ├── pages
│   ├── scenario
│   ├── step_definitions
│   ├── support
|--node_modules
|--.env
|--hook.js
|--.gitignore
|--package.json
```

## Running Tests
To run the Cucumber.js tests, use the following command:

1. chrome
```
npx cucumber-js --tags "@login"
npx cucumber-js --tags "@checkout"

```
