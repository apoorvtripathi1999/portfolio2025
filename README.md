# Interactive Windows XP Portfolio

A high-fidelity recreation of the Microsoft Windows XP operating system built as an interactive portfolio website. This project meticulously emulates the visual aesthetic, user interface, and core functionalities of Windows XP, serving as a unique and nostalgic platform for presenting professional information.

## 🖥️ Live Demo

[View Live Demo](https://your-portfolio-url.com) *(Replace with actual deployment URL)*

## 🚀 Features

- **Authentic Windows XP Boot Sequence**: Complete with animated progress bar and Microsoft branding
- **Interactive Desktop Environment**: Draggable icons, wallpaper background, and desktop interactions
- **Fully Functional Taskbar**: Start button, window management, and system tray with live clock
- **Draggable & Resizable Windows**: Complete window management with minimize, maximize, and close functionality
- **Start Menu**: Two-column design with portfolio navigation and system links
- **Portfolio Content**: Nine distinct sections covering education, experience, projects, and more
- **Pixel-Perfect Styling**: Royale Noir theme with authentic Windows XP visual elements

## 🛠️ Technologies Used

- **React 18+**: Component-based architecture for UI management
- **Vite**: Fast build tool and development server
- **Styled Components**: CSS-in-JS for component-scoped styling
- **Zustand**: Lightweight state management for window and desktop state
- **@dnd-kit**: Flexible drag-and-drop toolkit for window and icon interactions
- **Nanoid**: Unique ID generation for window instances

## 📁 Project Structure

```
src/
├── assets/
│   ├── fonts/          # Windows XP font files (Tahoma, Trebuchet MS, etc.)
│   ├── icons/          # Desktop, taskbar, and window icons
│   ├── images/         # Background wallpapers and user pictures
│   └── sounds/         # System sounds (optional)
├── components/
│   ├── shared/         # Reusable UI components (Button, DesktopIcon)
│   ├── system/         # Core OS components (Desktop, Taskbar, Window, StartMenu)
│   └── apps/          # Portfolio content components
├── hooks/              # Custom React hooks
├── store/              # Zustand state management
├── styles/             # Global styles and theme configuration
└── utils/              # Helper functions and constants
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Theming System

The application uses a comprehensive theming system that supports both the default "Royale Noir" (dark) theme and the classic "Luna (Blue)" theme:

### Color Palette
- **Window Frames**: Authentic XP gradients and borders
- **Taskbar**: Vertical gradients matching original XP design
- **Typography**: Tahoma, Trebuchet MS, and Franklin Gothic fonts
- **Icons**: 16x16, 24x24, and 32x32 pixel Windows XP style icons

### Typography Rules
| UI Element | Font Family | Size | Weight |
|------------|-------------|------|--------|
| Window Title Bar | Trebuchet MS | 10pt | Bold |
| Icon Labels | Tahoma | 8pt | Regular |
| Menu Items | Tahoma | 8pt | Regular |
| User Header | Franklin Gothic | 14pt | Medium |
| Body Text | Tahoma | 8pt | Regular |

## 🖼️ Assets Required

To achieve full visual fidelity, the following assets should be added to the project:

### Fonts
- Tahoma (system font)
- Trebuchet MS (title bars)
- Franklin Gothic (headers)
- Marlett (window controls)

### Icons
- Desktop icons (32x32, 48x48)
- Taskbar icons (16x16)
- Window title bar icons (16x16)
- Start menu icons (24x24)

### Images
- Windows XP Bliss wallpaper
- User profile pictures
- Application screenshots

## 🏗️ Architecture

### State Management
The application uses Zustand for centralized state management:

- **Window State**: Position, size, z-index, active state
- **Desktop State**: Icon positions, selection state
- **UI State**: Start menu visibility, boot sequence

### Component Hierarchy
```
App
├── BootSequence (conditional)
├── DndContext
│   ├── Desktop
│   │   ├── DesktopIcon[]
│   │   └── Window[]
│   └── Taskbar
│       ├── StartButton
│       ├── StartMenu
│       ├── TaskbarButton[]
│       └── SystemTray
```

### Drag & Drop System
- **Desktop Icons**: Draggable with grid snapping
- **Windows**: Full drag and resize functionality
- **Constraints**: Desktop boundaries, minimum sizes

## 📱 Portfolio Sections

The application includes nine portfolio sections:

1. **Education**: Academic background and certifications
2. **Work Experience**: Professional history and achievements
3. **Technologies**: Skills and technical expertise
4. **Projects**: Featured projects and case studies
5. **About**: Personal introduction and background
6. **Articles**: Technical writing and publications
7. **Research**: Academic research and papers
8. **YouTube**: Video content and tutorials
9. **Music**: Audio projects and compositions

## 🚀 Deployment

### Build Process

1. **Generate production build**
   ```bash
   npm run build
   ```

2. **Deploy static files**
   The build process creates optimized static files in the `/dist` directory that can be deployed to any static hosting service.

### Hosting Options

- **Netlify**: Drag and drop the `/dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Upload contents of `/dist` folder
- **AWS S3**: Upload static files to S3 bucket
- **Any CDN**: Upload to any content delivery network

### Environment Variables

No environment variables are required for basic functionality. For advanced features like analytics or external APIs, create a `.env` file:

```env
VITE_ANALYTICS_ID=your-analytics-id
VITE_API_URL=your-api-endpoint
```

## 🎯 Customization

### Adding New Portfolio Sections

1. Create a new content component in `src/components/apps/`
2. Add the section to the app configs in `src/store/windowsStore.js`
3. Update the desktop icons and start menu items
4. Add appropriate icons to the assets folder

### Modifying Themes

Edit `src/styles/theme.js` to customize colors, typography, and layout dimensions.

### Adding New Features

The modular architecture makes it easy to add new features:
- New window types
- Additional desktop interactions
- Custom system tray items
- Sound effects and animations

## 🐛 Troubleshooting

### Common Issues

1. **Icons not displaying**: Ensure icon files are in the correct format and path
2. **Fonts not loading**: Verify font files are in the assets/fonts directory
3. **Drag and drop not working**: Check that @dnd-kit is properly configured
4. **Window positioning issues**: Verify viewport dimensions and constraints

### Performance Optimization

- Icons are lazy-loaded to improve initial load time
- Windows use React.memo for performance optimization
- State updates are batched to prevent unnecessary re-renders

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please open an issue on GitHub or contact the developer.

---

**Note**: This project is a tribute to the classic Windows XP operating system and is intended for educational and portfolio purposes. All Microsoft trademarks and copyrights belong to Microsoft Corporation.