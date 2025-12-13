# Quickstart: UI Robotics Theme

## Prerequisites

- Node.js 18+ installed
- Docusaurus 3.x project already set up
- Basic knowledge of CSS and React

## Installation Steps

### 1. Update Custom CSS
Replace the contents of `frontend/src/css/custom.css` with the robotics-themed CSS variables:

```css
/**
 * Robotics Theme CSS
 * Any CSS included here will be global. The classic template
 * bundles Infima by default. Infima is a CSS framework designed to
 * work well for content-centric websites.
 */

/* Robotics-themed color palette */
:root {
  --ifm-color-primary: #2A4D69; /* Metallic blue */
  --ifm-color-primary-dark: #213D54; /* Darker metallic */
  --ifm-color-primary-darker: #1D364A; /* Even darker */
  --ifm-color-primary-darkest: #152736; /* Darkest metallic */
  --ifm-color-primary-light: #336383; /* Light metallic */
  --ifm-color-primary-lighter: #3D7292; /* Lighter metallic */
  --ifm-color-primary-lightest: #5A8FB0; /* Lightest metallic */
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(42, 77, 105, 0.3);

  /* Additional robotics theme colors */
  --robotics-accent: #00BCD4; /* Electric blue */
  --robotics-secondary: #4B6584; /* Tech gray */
  --robotics-background: #F5F7FA; /* Light background */
  --robotics-dark-bg: #1A1F25; /* Dark background */
}

/* Dark mode robotics theme */
[data-theme='dark'] {
  --ifm-color-primary: #4CAFED; /* Brighter blue in dark mode */
  --ifm-color-primary-dark: #2196F3;
  --ifm-color-primary-darker: #1E88E5;
  --ifm-color-primary-darkest: #1565C0;
  --ifm-color-primary-light: #64B5F6;
  --ifm-color-primary-lighter: #90CAF9;
  --ifm-color-primary-lightest: #BBDEFB;
  --docusaurus-highlighted-code-line-bg: rgba(66, 133, 244, 0.3);

  /* Dark mode specific colors */
  --robotics-accent: #00BCD4;
  --robotics-secondary: #64748B;
  --robotics-background: #1A1F25;
  --robotics-dark-bg: #0F1215;
}
```

### 2. Add Typography
Add font imports to your Docusaurus configuration in `docusaurus.config.ts`:

```typescript
// At the top of the file, add:
import { themes as prismThemes } from 'prism-react-renderer';

// In the presets section, add Google Fonts import if needed:
presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/...',
      },
      blog: { ... },
      theme: {
        customCss: './src/css/custom.css',
      },
    } satisfies Preset.Options,
  ],
],

// In themeConfig, add the fonts:
themeConfig: {
  // ... existing config
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap',
  ],
} satisfies Preset.ThemeConfig,
```

### 3. Update Component Styles
For the HomepageFeatures component, update `frontend/src/components/HomepageFeatures/styles.module.css`:

```css
.features {
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  background: var(--robotics-background);
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 4px 6px rgba(30, 41, 59, 0.1);
}

.featureSvg {
  height: 200px;
  width: 200px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

.featureCard {
  border: 1px solid var(--ifm-color-primary-lighter);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.featureCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(42, 77, 105, 0.2);
}
```

### 4. Build and Test
Run the development server to see the changes:

```bash
cd frontend
npm run start
```

## Customization Options

### Color Customization
Adjust the CSS variables in `custom.css` to match your specific robotics theme preferences.

### Component Styling
Each Docusaurus component can be themed by creating CSS modules in the `src/css/` directory and importing them in the respective components.

### Font Alternatives
If Google Fonts are not suitable, you can use system fonts or self-hosted fonts by updating the font imports.

## Troubleshooting

### Fonts not loading
- Check that the Google Fonts URL is accessible
- Verify the font names match exactly
- Confirm the import is properly added to the config

### Colors not applying
- Ensure CSS variables are properly defined
- Check for conflicting styles
- Verify the variable names match between CSS and component files

### Responsive issues
- Test across different screen sizes
- Ensure mobile breakpoints are preserved
- Verify that animations don't impact mobile performance