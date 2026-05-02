# PortfolioApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.23.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Deploying to Vercel

This app is ready to deploy as a static Angular site on Vercel.

### Recommended project settings

- Framework Preset: `Other`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist/portfolio-app/browser`
- Node.js Version: `22.x`

The repository includes a `vercel.json` file so these values can stay consistent across environments.

### Deployment steps

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Vercel, click **Add New Project** and import the repository.
3. Confirm the build settings above if Vercel asks for them.
4. Add any future environment variables in the Vercel project settings before promoting to production.
5. Deploy and then assign your custom domain in the Vercel dashboard.

### Production checklist

- Keep `node_modules` and `dist` out of version control.
- Use `npm ci` instead of `npm install` in CI for reproducible builds.
- Promote changes through preview deployments before merging to production.
- Store secrets only in Vercel environment variables, never in source files.
- Re-run `npm run build` locally before major releases to catch regressions early.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
