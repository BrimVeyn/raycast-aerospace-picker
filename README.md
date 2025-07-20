# Aerospace Picker

A powerful Raycast extension that enhances AeroSpace window management by providing an intuitive window picker interface. Quickly navigate, focus, and move windows across workspaces with fuzzy search and keyboard shortcuts.

## About AeroSpace

[AeroSpace](https://github.com/nikitabobko/AeroSpace) is a tiling window manager for macOS inspired by i3wm. Aerospace Picker makes it even more powerful by providing a visual interface for window management directly within Raycast.

## Features

### 🔍 **Window Discovery**
- **Visual Overview**: See all your windows organized by workspace
- **Fuzzy Search**: Quickly find windows by app name or window title
- **App Icons**: Instantly recognize applications with their native icons
- **Window Details**: View window IDs and workspace assignments

### 🎯 **Window Actions**
- **Focus Window**: Instantly switch to any window (default action)
- **Move to Current**: Bring any window to your current workspace
- **Move to Empty Workspace**: Send windows to available empty workspaces (`⌘M`)
- **Move to Any Workspace**: Choose from all available workspaces (`⌘A`)

### ⚡ **Smart Workspace Management**
- **Empty Workspace Detection**: Automatically identifies available workspaces
- **Real-time Updates**: Window list refreshes after each action
- **Workspace Organization**: Windows grouped by their current workspace
- **Follow Focus**: Automatically switches to the target workspace when moving windows

## Screenshots

### Main Window Picker Interface
![Window Picker Interface](metadata/Capture%20d'écran%202025-07-20%20à%2016.06.59.png)
*Browse all your windows organized by workspace with fuzzy search*

### Move to Empty Workspace
![Move to Empty Workspace](metadata/Capture%20d'écran%202025-07-20%20à%2016.07.08.png)
*Quickly move windows to available empty workspaces*

### Move to Any Workspace
![Move to Any Workspace](metadata/Capture%20d'écran%202025-07-20%20à%2016.13.59.png)
*Choose from all available workspaces (1-10, A-Z)*

### Window Actions Menu
![Window Actions](metadata/Capture%20d'écran%202025-07-20%20à%2016.16.20.png)
*Access all window management actions with keyboard shortcuts*

## Requirements

- **macOS**: Required for AeroSpace compatibility
- **AeroSpace**: Install from [GitHub](https://github.com/nikitabobko/AeroSpace)
- **Raycast**: Install from [raycast.com](https://raycast.com)

## Installation

### From Raycast Store
1. Open Raycast
2. Search for "Aerospace Picker"
3. Install the extension

### From Source
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` to develop locally
4. Run `npm run build` to build for production

## Configuration

### AeroSpace Path
By default, the extension looks for AeroSpace at `/usr/local/bin/aerospace`. If you installed AeroSpace elsewhere:

1. Open Raycast Preferences
2. Go to Extensions → Aerospace Picker
3. Set the correct path to your AeroSpace binary

## Usage

### Basic Usage
1. Open Raycast (`⌘Space`)
2. Type "Pick Window" or use the configured hotkey
3. Browse or search for your target window
4. Press `Enter` to focus on the selected window

### Advanced Actions
- **Search**: Start typing to filter windows by app name or title
- **Focus Window**: `Enter` - Switch to the selected window
- **Move to Current**: `⌘Enter` - Bring window to current workspace  
- **Move to Empty Workspace**: `⌘M` - Choose from available empty workspaces
- **Move to Any Workspace**: `⌘A` - Choose from all workspaces (1-10, A-Z)

### Keyboard Shortcuts
- `Enter`: Focus on selected window
- `⌘M`: Move to empty workspace submenu
- `⌘A`: Move to any workspace submenu
- `Escape`: Close the picker

## Supported Workspaces

Aerospace Picker supports all standard AeroSpace workspaces:
- **Numbered**: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
- **Lettered**: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z

## Development

### Project Structure
```
src/
├── pick-window.tsx      # Main window picker interface
├── pick.actions.tsx     # Window action handlers
├── run.tsx             # AeroSpace CLI integration
├── workspaces.tsx      # Workspace management logic
├── types.tsx           # TypeScript definitions
└── error-view.tsx      # Error handling UI
```

### Scripts
- `npm run dev`: Development mode
- `npm run build`: Build for production
- `npm run lint`: Run linting
- `npm run fix-lint`: Fix linting issues

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details.

## Author

Created by [brimveyn](https://github.com/brimveyn)

---

*Enhance your AeroSpace workflow with the power of Raycast! 🚀*
