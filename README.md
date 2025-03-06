# smart-async

**smart-async** is a TypeScript utility library providing a suite of asynchronous helpers to tackle common challenges like retries, timeouts, debouncing, and cancellation of async operations. This package aims to simplify handling unreliable network calls, long-running operations, or rapid function calls in your projects.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Retry Function](#retry-function)
  - [Timeout Wrapper](#timeout-wrapper)
  - [Debounce for Async Functions](#debounce-for-async-functions)
  - [Cancellation Token](#cancellation-token)
- [Development](#development)
  - [Building the Package](#building-the-package)
  - [Running Tests](#running-tests)
- [Publishing](#publishing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Retry with Exponential Backoff:** Automatically retries a failing promise-returning function with exponentially increasing delays.
- **Timeout Wrapper:** Rejects a promise if it does not settle within a specified time limit.
- **Debounce for Async Functions:** Consolidates multiple rapid calls to an async function into one execution after a delay.
- **Cancellation Token:** Provides a cancellation mechanism for long-running async operations.

## Installation

Install the package via npm:

```bash
npm install smart-async
