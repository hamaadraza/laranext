# Laranext

Laranext is an open-source monorepo project that combines the power of Laravel as an API backend and Next.js as a frontend, providing a robust foundation for modern web applications.

## Features

- **Monorepo Structure**: Efficiently manage both backend and frontend in a single repository
- **Laravel API**: Leverage Laravel's powerful features for building robust APIs
- **Next.js Frontend**: Create performant and SEO-friendly frontend applications
- **TypeScript Support**: Enjoy type safety and improved developer experience
- **Turborepo**: Optimize your workflow with Turborepo's build system

## Tech Stack

- **Backend**: Laravel (PHP)
- **Frontend**: Next.js (React & TypeScript)
- **Build System**: Turborepo
- **Package Manager**: pnpm

## Setup Instructions

### Prerequisites

- PHP 8.1+
- Node.js 18+
- pnpm
- Composer

### Backend (Laravel API)

1. Navigate to the API directory:
   ```
   cd apps/api
   ```

2. Install PHP dependencies:
   ```
   composer install
   ```

3. Copy the `.env.example` file to `.env` and configure your environment variables:
   ```
   cp .env.example .env
   ```

4. Generate an application key:
   ```
   php artisan key:generate
   ```

5. Run database migrations:
   ```
   php artisan migrate
   ```

6. Start the Laravel development server:
   ```
   php artisan serve
   ```

### Frontend (Next.js)

1. Navigate to the web directory:
   ```
   cd apps/web
   ```

2. Install Node.js dependencies:
   ```
   pnpm install
   ```

3. Copy the `.env.example` file to `.env.local` and configure your environment variables:
   ```
   cp .env.example .env.local
   ```

4. Start the Next.js development server:
   ```
   pnpm dev
   ```

## Development

To develop all apps and packages, run the following command from the root directory:

```
pnpm dev
```

## Building

To build all apps and packages, run the following command from the root directory:

```
pnpm build
```

## Contributing

We welcome contributions to Laranext! Please read our contributing guidelines (link to CONTRIBUTING.md) before submitting pull requests.

## License

Laranext is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Acknowledgements

This project is built using Turborepo, an amazing build system for JavaScript and TypeScript monorepos. We're grateful for the tools and libraries that make Laranext possible.

---

Laranext: Empowering developers to build scalable, full-stack web applications with Laravel and Next.js in a monorepo architecture.
