# PNG Icon Sizes for Portfolio

## Recommended PNG Icon Sizes:

### Desktop Icons:
- 16x16px - Small desktop/list view
- 24x24px - Medium desktop view  
- 32x32px - Standard desktop icons
- 48x48px - Large desktop icons
- 64x64px - Extra large desktop view

### Favicon Set:
- 16x16px - Browser tab icon
- 32x32px - Browser bookmark
- 96x96px - Android Chrome
- 180x180px - Apple Touch Icon
- 192x192px - Android Chrome (high-res)

### Window Title Bars:
- 16x16px - Window title bar icon
- 20x20px - Windows 10 style

## File Naming Convention:
```
/src/assets/icons/png/
├── resume-16.png
├── resume-24.png  
├── resume-32.png
├── resume-48.png
├── pong-16.png
├── pong-24.png
├── pong-32.png
├── pong-48.png
etc...
```

## Usage in Code:
```jsx
// Responsive icon component
const IconSet = ({ name, size = 32 }) => {
  const iconSrc = `/src/assets/icons/png/${name}-${size}.png`;
  return <img src={iconSrc} alt={name} width={size} height={size} />;
};

// Usage: <IconSet name="resume" size={48} />
```