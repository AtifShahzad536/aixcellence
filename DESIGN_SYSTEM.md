# AIXcellence Design System

## Color Palette

### Primary Colors
- **Dark Navy** (`#0A1A2F`): Primary color for trust, stability, and professionalism
- **Blue** (`#0E4B8E`): Secondary color for innovation and technical excellence
- **Cyan** (`#18CBBE`): Gradient start for freshness and innovation

### Accent Colors
- **Gold** (`#D4AF3F`): Use sparingly for luxury, success, and expertise
  - Primary use: CTAs, logos, important headings, icons
  - Avoid: Overwhelming backgrounds or large text blocks

### Neutral Colors
- **White** (`#FFFFFF`): Primary background color
- **Off-white** (`#FAFBFC`): Soft background alternative
- **Light Gray** (`#F5F7FA`): Subtle backgrounds, borders
- **Medium Gray** (`#E8ECF0`): Dividers, subtle elements
- **Text Dark** (`#0A1A2F`): Dark text on light backgrounds
- **Text Muted** (`#64748B`): Secondary content text
- **Text Light** (`#94A3B8`): Tertiary content text

### Gradients
- **Primary Gradient**: `#18CBBE → #0E4B8E` (135deg)
  - Use for: Headings, badges, dynamic graphics, product branding
- **Gold Gradient**: `#F5E6A8 → #D4AF3F → #B8941F`
  - Use for: CTAs, premium highlights
- **Subtle Gradients**: Low opacity versions for backgrounds and hover states

## Typography System

### Font Family
- **Primary**: Manrope (Sans Serif)
- **Fallback**: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif

### Font Weights
- **Light**: 300
- **Regular**: 400 (body text)
- **Medium**: 500
- **Semibold**: 600 (emphasis, strong text)
- **Bold**: 700 (headings, CTAs)
- **Extrabold**: 800 (main headings)

### Font Sizes
- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px) - Default body text
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)

## Usage Guidelines

### Color Balance
1. **Maintain Balance**: Don't let gold and blue overwhelm the design
2. **Gold as Accent**: Use primarily for CTAs, logos, headings, and important icons
3. **Readability**: Ensure sufficient contrast (WCAG AA minimum)
   - White text on navy: ✅ Good
   - Gold text: Use on dark backgrounds only
   - Light text: Use on dark backgrounds

### Neutral Colors
- Use white or off-white as primary backgrounds
- Light gray for subtle sections and borders
- Medium gray for dividers and subtle elements

### Gradient Usage
- Use the primary gradient (`#18CBBE → #0E4B8E`) for:
  - Dynamic graphics
  - Product branding
  - Heading text (with text clipping)
  - Badges and highlights
- Portrays company as futuristic and innovative

### Typography Hierarchy
- **Headings**: Extrabold (800), gradient text for main headings
- **Body Text**: Regular (400), dark or muted color
- **Emphasis**: Semibold (600) or Bold (700)
- **CTAs**: Bold (700) with gold gradient background

## CSS Variables

All colors and typography are available as CSS variables:

```css
/* Colors */
var(--aix-navy)
var(--aix-blue)
var(--aix-cyan)
var(--aix-gold)
var(--white)
var(--off-white)
var(--light-gray)
var(--medium-gray)
var(--text-dark)
var(--text-muted)
var(--text-light)

/* Gradients */
var(--gradient-primary)
var(--gradient-subtle)
var(--gradient-gold)
var(--gradient-gold-subtle)

/* Typography */
var(--font-primary)
var(--font-light)
var(--font-regular)
var(--font-medium)
var(--font-semibold)
var(--font-bold)
var(--font-extrabold)
var(--text-xs)
var(--text-sm)
var(--text-base)
/* ... etc */
```

## Best Practices

1. **Contrast**: Always test text contrast ratios (minimum 4.5:1 for body text)
2. **Gold Usage**: Limit gold to 10-15% of visual elements
3. **Gradients**: Use gradients for emphasis, not as primary backgrounds
4. **Typography**: Maintain consistent font weight hierarchy
5. **Spacing**: Use consistent spacing scale (multiples of 4px or 8px)












