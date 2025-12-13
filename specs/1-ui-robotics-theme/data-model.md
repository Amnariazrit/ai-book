# Data Model: UI Robotics Theme

## Theme Configuration Object

```typescript
interface RoboticsThemeConfig {
  colors: {
    primary: string;        // Main theme color (metallic blue)
    secondary: string;      // Secondary color (tech gray)
    accent: string;         // Accent color (electric blue)
    background: string;     // Background color
    text: string;           // Text color
    code: string;           // Code block color
  };
  typography: {
    headingFont: string;    // Roboto Condensed or similar
    bodyFont: string;       // Inter or similar
    codeFont: string;       // JetBrains Mono or similar
    fontSize: {
      small: string;
      normal: string;
      large: string;
      xlarge: string;
    };
  };
  components: {
    button: ComponentStyle;
    card: ComponentStyle;
    navbar: ComponentStyle;
    footer: ComponentStyle;
    codeBlock: ComponentStyle;
  };
  animations: {
    hoverEffect: string;
    transitionSpeed: string;
  };
}
```

## Component Style Interface

```typescript
interface ComponentStyle {
  colors: {
    background: string;
    border: string;
    text: string;
  };
  dimensions: {
    padding: string;
    margin: string;
    borderRadius: string;
  };
  effects: {
    boxShadow: string;
    border: string;
    transition: string;
  };
}
```

## Theme Variants

### Light Theme
- Background: Light gray with subtle metallic tint
- Text: Dark gray for readability
- Accents: Electric blue highlights

### Dark Theme
- Background: Deep metallic blue-gray
- Text: Light gray for contrast
- Accents: Bright electric blue highlights

## Responsive Breakpoints

### Desktop (≥1200px)
- Full theme elements with maximum visual impact
- Complex hover effects and animations

### Tablet (768px - 1199px)
- Simplified animations for performance
- Adjusted spacing for touch interaction

### Mobile (<768px)
- Minimal animations to preserve performance
- Touch-optimized component sizes
- Streamlined visual elements