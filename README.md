# Portfolio

A modern portfolio website built with a clean and organized architecture.

## Project Structure

```
/
├── public/              # Assets (CV PDF, photos, logos)
├── src/
│   ├── components/      # Reusable components (Buttons, Cards, Layout)
│   ├── app/            # Pages (Home, Projects, Blog)
│   ├── content/        # .mdx files for each project (data/UI separation)
│   └── lib/            # Utility functions and TypeScript types
```

### Directory Details

- **`/public`**: Static assets that are publicly accessible
  - CV/Resume PDFs
  - Profile photos and images
  - Logos and icons

- **`/src/components`**: Reusable React components
  - Button components
  - Card components
  - Layout components (Header, Footer, Navigation)

- **`/src/app`**: Application pages
  - Home page
  - Projects showcase
  - Blog

- **`/src/content`**: MDX content files
  - Project descriptions and details
  - Separates content from presentation logic

- **`/src/lib`**: Utility functions and TypeScript definitions
  - Helper functions
  - Type definitions and interfaces
  - Application constants