# React + TypeScript + Vite

This template provides a complete setup to get React working in Vite with HMR and this monorepo's custom ESLint configuration.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Packages

This template includes the following packages added for convenience:

- `react-router-dom`: [React Router](https://reactrouter.com/) for SPA routing.
- `tailwindcss`: [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS.
- `@headlessui/react`: [Headless UI](https://headlessui.dev/) for unstyled UI components.
- `@heroicons/react`: [Heroicons](https://heroicons.com/) for SVG icons.
- `react-query`: [React Query](https://react-query.tanstack.com/) for data fetching.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
