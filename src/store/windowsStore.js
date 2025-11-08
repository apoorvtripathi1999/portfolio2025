import { create } from 'zustand';
import { nanoid } from 'nanoid';

// Application configurations for portfolio sections
const appConfigs = {
  education: {
    appId: 'education',
    title: 'Education',
    icon: '/src/assets/icons/education.svg',
    defaultSize: { width: 600, height: 400 }
  },
  workExperience: {
    appId: 'workExperience',
    title: 'Work Experience',
    icon: '/src/assets/icons/briefcase.svg',
    defaultSize: { width: 700, height: 500 }
  },
  technologies: {
    appId: 'technologies',
    title: 'Technologies',
    icon: '/src/assets/icons/computer.svg',
    defaultSize: { width: 650, height: 450 }
  },
  projects: {
    appId: 'projects',
    title: 'Projects',
    icon: '/src/assets/icons/folder.svg',
    defaultSize: { width: 800, height: 600 }
  },
  about: {
    appId: 'about',
    title: 'About Me',
    icon: '/src/assets/icons/user.svg',
    defaultSize: { width: 500, height: 400 }
  },
  articles: {
    appId: 'articles',
    title: 'Articles',
    icon: '/src/assets/icons/document.svg',
    defaultSize: { width: 600, height: 500 }
  },
  research: {
    appId: 'research',
    title: 'Research',
    icon: '/src/assets/icons/research.svg',
    defaultSize: { width: 700, height: 550 }
  },
  youtube: {
    appId: 'youtube',
    title: 'YouTube Channel',
    icon: '/src/assets/icons/youtube.svg',
    defaultSize: { width: 600, height: 400 }
  },
  pong: {
    appId: 'pong',
    title: 'Pong',
    icon: '/src/assets/icons/pong.svg',
    defaultSize: { width: 640, height: 480 }
  },
  music: {
    appId: 'music',
    title: 'Music',
    icon: '/src/assets/icons/music.svg',
    defaultSize: { width: 550, height: 350 }
  },
  resume: {
    appId: 'resume',
    title: 'Resume',
    icon: '/src/assets/icons/resume.svg',
    defaultSize: { width: 700, height: 500 }
  }
};

const useWindowsStore = create((set, get) => ({
  // State
  windows: [],
  activeWindowId: null,
  isStartMenuOpen: false,
  isBootComplete: false,
  systemState: 'normal', // 'normal', 'logging-off', 'logged-off', 'powering-off', 'powered-off'
  desktopIcons: [
    { id: 'education', ...appConfigs.education, position: { x: 50, y: 50 } },
    { id: 'workExperience', ...appConfigs.workExperience, position: { x: 150, y: 50 } },
    { id: 'technologies', ...appConfigs.technologies, position: { x: 250, y: 50 } },
    { id: 'projects', ...appConfigs.projects, position: { x: 350, y: 50 } },
    { id: 'about', ...appConfigs.about, position: { x: 450, y: 50 } },
    { id: 'articles', ...appConfigs.articles, position: { x: 50, y: 150 } },
    { id: 'research', ...appConfigs.research, position: { x: 150, y: 150 } },
    { id: 'youtube', ...appConfigs.youtube, position: { x: 250, y: 150 } },
    { id: 'resume', ...appConfigs.resume, position: { x: 350, y: 150 } },
    { id: 'pong', ...appConfigs.pong, position: { x: 450, y: 150 } },
    { id: 'music', ...appConfigs.music, position: { x: 50, y: 250 } }
  ],

  // Actions
  openWindow: (appId) => {
    console.log('Store: openWindow called with appId:', appId); // Debug log
    const config = appConfigs[appId];
    if (!config) {
      console.log('Store: No config found for appId:', appId); // Debug log
      return;
    }

    const { windows } = get();
    console.log('Store: Current windows:', windows.length); // Debug log
    
    // Check if window is already open
    const existingWindow = windows.find(w => w.appId === appId);
    if (existingWindow) {
      get().focusWindow(existingWindow.id);
      return;
    }

    const newWindow = {
      id: nanoid(),
      appId: config.appId,
      title: config.title,
      icon: config.icon,
      position: {
        x: Math.max(50, Math.random() * (window.innerWidth - config.defaultSize.width - 100)),
        y: Math.max(50, Math.random() * (window.innerHeight - config.defaultSize.height - 150))
      },
      size: { ...config.defaultSize },
      isMinimized: false,
      isMaximized: false,
      zIndex: Math.max(...windows.map(w => w.zIndex), 0) + 1
    };

    console.log('Store: Creating new window:', newWindow); // Debug log
    set(state => ({
      windows: [...state.windows, newWindow],
      activeWindowId: newWindow.id
    }));
    console.log('Store: Window created successfully'); // Debug log
  },

  closeWindow: (id) => {
    const { windows, activeWindowId } = get();
    const newWindows = windows.filter(w => w.id !== id);
    
    let newActiveWindowId = activeWindowId;
    if (activeWindowId === id && newWindows.length > 0) {
      // Set the window with the highest zIndex as active
      const sortedWindows = newWindows.sort((a, b) => b.zIndex - a.zIndex);
      newActiveWindowId = sortedWindows[0].id;
    } else if (newWindows.length === 0) {
      newActiveWindowId = null;
    }

    set({
      windows: newWindows,
      activeWindowId: newActiveWindowId
    });
  },

  focusWindow: (id) => {
    const { windows } = get();
    const maxZIndex = Math.max(...windows.map(w => w.zIndex));
    
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id 
          ? { ...w, zIndex: maxZIndex + 1 }
          : w
      ),
      activeWindowId: id
    }));
  },

  minimizeWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id 
          ? { ...w, isMinimized: !w.isMinimized }
          : w
      )
    }));
  },

  toggleMaximizeWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id 
          ? { ...w, isMaximized: !w.isMaximized }
          : w
      )
    }));
  },

  updateWindowPosition: (id, newPosition) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id 
          ? { ...w, position: newPosition }
          : w
      )
    }));
  },

  updateWindowSize: (id, newSize) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id 
          ? { ...w, size: newSize }
          : w
      )
    }));
  },

  toggleStartMenu: () => {
    set(state => ({
      isStartMenuOpen: !state.isStartMenuOpen
    }));
  },

  closeStartMenu: () => {
    set({ isStartMenuOpen: false });
  },

  setBootComplete: (complete) => {
    set({ isBootComplete: complete });
  },

  updateDesktopIconPosition: (id, newPosition) => {
    set(state => ({
      desktopIcons: state.desktopIcons.map(icon => 
        icon.id === id 
          ? { ...icon, position: newPosition }
          : icon
      )
    }));
  },

  // Power management actions
  logOff: () => {
    set({ systemState: 'logging-off', isStartMenuOpen: false });
    setTimeout(() => {
      set({ systemState: 'logged-off' });
    }, 2000); // 2 second log off animation
  },

  logIn: () => {
    set({ systemState: 'normal' });
  },

  powerOff: () => {
    set({ systemState: 'powering-off', isStartMenuOpen: false });
    setTimeout(() => {
      set({ systemState: 'powered-off' });
    }, 3000); // 3 second power off animation
  },

  restart: () => {
    set({ 
      systemState: 'normal', 
      isBootComplete: false,
      windows: [],
      activeWindowId: null,
      isStartMenuOpen: false
    });
  }
}));

export default useWindowsStore;
