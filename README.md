# cli-example

## Installation

## Commands
```shell
npm i
npm run build
npm link
cli-example
```

## Architecture

### Folder structure
* **dist** — is where your CLI’s lives. It’s what gets called when someone runs your CLI.
* **src/commands** — holds individual command files. This makes adding new commands or editing existing ones cleaner.
* **src/handlers** — contains handlers for system events.
* **src/utils** — is for utility functions you might need across several commands, like formatting data.
* **src/lib** — could be where your core functionality resides, especially if your CLI interacts with APIs or performs complex logic.
* **src/index.ts** — The main file of the console tool

### Utils
* **Spinner** — wrapper of external library (ora)

## Contributing

## License

## Links
* [Building a CLI App with Node.js in 2024](https://egmz.medium.com/building-a-cli-with-node-js-in-2024-c278802a3ef5)
* [Building attractive CLIs in TypeScript](https://blog.terrible.dev/blog/Building-attractive-CLIs-in-JavaScript/)
