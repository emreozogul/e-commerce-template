# E-Commerce Template

A modern, internationalized e-commerce template built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌐 Internationalization (English & Turkish)
- 🛍️ Product catalog with filtering
- 🛒 Shopping cart functionality
- 🎨 Responsive design
- 🔍 Product search and filtering
- 🌙 Modern UI components with shadcn/ui
- 🔄 State management with Zustand

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn
- next-intl
- Radix UI
- Zustand
- Lucide Icons

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/e-commerce-template.git
cd e-commerce-template
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
├── app/                   # Next.js app directory
├── components/           # React components
│   ├── containers/      # Layout components
│   ├── product/        # Product-related components
│   └── ui/             # UI components
├── hooks/               # Custom React hooks
├── lib/                # Utility functions
├── messages/           # Translation files
├── models/             # TypeScript interfaces
└── stores/             # Zustand stores
```

## Internationalization

The template supports multiple languages using `next-intl`. Currently supported languages:
- English (en)
- Turkish (tr)

Add new translations in the `messages` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
