# `@beerush/spawn`

A simple script to run multiple commands in parallel. For example, you can run `npm run build` and `npm run watch` at
the
same time.

## Installation

```bash
npm install -g @beerush/spawn
```

**As Dev Dependency**

```bash
npm install -D @beerush/spawn
```

## Usage

To use it, simply run `bee-spawn` followed by the commands you want to run in parallel, separated by `--`.

**Example**

```bash
bee-spawn tsc -w -- vite dev --port 3000
```

**Usage with npm scripts**

```json
{
  "scripts": {
    "dev": "bee-spawn tsc -w -- vite dev --port 3000"
  }
}
```

```bash
npm run dev
```
