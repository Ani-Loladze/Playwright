# E2E Test Suite — Practice Software Testing

Automated end-to-end tests for [practicesoftwaretesting.com](https://practicesoftwaretesting.com) using Playwright.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

---

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Ani-Loladze/Playwright.git
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

---

## Running the Tests

**Interactive mode (UI):**
```bash
npx playwright test --ui
```

**Headless mode (command line):**
```bash
npx playwright test
```

**View the HTML report after a run:**
```bash
npx playwright show-report
```

---

## Notes

- Tests run against the live site at `https://practicesoftwaretesting.com` — an internet connection is required.
- The registration test uses a hardcoded email. If run multiple times, the email may already be registered — consider replacing it with the `uniqueEmail` variable already defined in the test.