# 🏠 Prime State - Estate Agent Application

<div align="center">

<img src="public/favicon.png" alt="Prime State Logo" width="256" height="256" style="border: 2px solid #6366f1; border-radius: 12px; padding: 8px; background: #f8fafc;" />

**Find Your Dream Place**

A modern, feature-rich real estate application built with React and Vite. Discover exceptional properties tailored to your lifestyle with an intuitive, beautifully designed interface.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Theming](#-theming)
- [Testing](#-testing)
- [Scripts](#-scripts)
- [Credits](#-credits)
- [Author](#-author)

---

## ✨ Features

### 🔍 Advanced Property Search
- **Multi-criteria filtering** - Search by property type (House/Flat), price range, bedroom count, postcode area, and date added
- **Price Range Slider** - Interactive dual-handle slider for setting min/max price (£0 - £1,000,000)
- **Date Picker** - Filter properties added after a specific date
- **Reset Filters** - One-click reset button to clear all filters and show all results
- **Real-time Results** - Instant search results update as you apply filters

### 🖼️ Property Details Page
- **Two-Column Layout** - Sticky image gallery on the left with scrollable details on the right
- **Image Gallery** - Full-featured carousel with thumbnails, fullscreen mode, and lazy loading
- **Tabbed Information** - Description, Floor Plan, and Map views organized in tabs
- **Quick Info Badges** - Property type, bedroom count, price, and location at a glance
- **Embedded Google Maps** - Interactive location map for each property
- **Floor Plans** - View detailed floor plan images when available

### ❤️ Favorites System
- **Drag & Drop** - Drag property cards to the favorites sidebar to save them
- **Persistent Sidebar** - Always-visible favorites panel on the right side
- **Easy Removal** - Drag favorites out or use the clear button to remove
- **Visual Feedback** - Glowing effects when dragging over the drop zone

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Beautiful frosted glass effects throughout
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Gradient Backgrounds** - Animated gradient header with shifting colors
- **Hover Effects** - Interactive elements with scale, glow, and transform effects
- **Staggered Loading** - Property cards animate in sequentially for visual appeal
- **Toast Notifications** - Elegant feedback messages for user actions

### 🌙 Dark/Light Theme
- **Theme Toggle** - Floating button to switch between light and dark modes
- **System Preference Detection** - Automatically matches your OS theme preference
- **Persistent Selection** - Theme choice saved to localStorage
- **CSS Variables** - Comprehensive theming with design tokens

### 📱 Responsive Design
- **Mobile-First** - Optimized layouts for all screen sizes
- **Collapsible Sidebar** - Filter panel adapts to smaller screens
- **Touch-Friendly** - Large tap targets and smooth touch interactions
- **Flexible Grid** - Property cards reflow based on available space

### 🦶 Premium Footer
- **Brand Section** - Logo and company description
- **Quick Links** - Navigation to About, Properties, Agents, Contact
- **Legal Links** - Privacy Policy, Terms of Service, Cookie Policy
- **Social Media** - Facebook, Twitter, Instagram, LinkedIn icons
- **Copyright** - Dynamic year display

---

## 🛠️ Tech Stack

### Core
| Technology       | Version | Purpose                 |
|------------------|---------|-------------------------|
| **React**        | 19.2.0  | UI Framework            |
| **Vite**         | 7.2.4   | Build Tool & Dev Server |
| **React Router** | 7.11.0  | Client-side Routing     |

### UI Libraries
| Library                 | Purpose                    |
|-------------------------|----------------------------|
| **Framer Motion**       | Animations & Transitions   |
| **React Icons**         | Icon Library (FontAwesome) |
| **React Toastify**      | Toast Notifications        |
| **React Image Gallery** | Image Carousel             |
| **React Tabs**          | Tabbed Content             |
| **React DatePicker**    | Date Selection             |
| **RC Slider**           | Range Slider Component     |
| **@hello-pangea/dnd**   | Drag & Drop                |

### Development
| Tool                | Purpose                 |
|---------------------|-------------------------|
| **Vitest**          | Unit Testing            |
| **Testing Library** | React Component Testing |
| **ESLint**          | Code Linting            |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/theseekerofficial/Estate-Agent-Frontend-App.git
   cd estate-agent-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

---

## 📁 Project Structure

```
estate-agent-app/
├── public/
│   └── favicon.png              # App logo/favicon
├── src/
│   ├── assets/                  # Static assets
│   ├── components/              # Reusable UI components
│   │   ├── DraggablePortal.jsx  # Portal for drag previews
│   │   ├── Footer.jsx           # Site footer
│   │   ├── Header.jsx           # Hero header
│   │   ├── PropertyCard.jsx     # Property listing card
│   │   ├── SearchForm.jsx       # Filter panel
│   │   └── ThemeToggle.jsx      # Dark/Light mode toggle
│   ├── context/                 # React Context providers
│   │   ├── FavoritesContext.jsx # Favorites state management
│   │   └── ThemeContext.jsx     # Theme state management
│   ├── data/
│   │   └── properties.json      # Property listings data
│   ├── hooks/
│   │   └── useFavorites.jsx     # Custom hook for favorites
│   ├── pages/                   # Route pages
│   │   ├── PropertyDetails.jsx  # Single property view
│   │   └── SearchPage.jsx       # Main search/listing page
│   ├── styles/                  # CSS modules
│   │   ├── components/          # Component-specific styles
│   │   └── pages/               # Page-specific styles
│   ├── __tests__/               # Test files
│   ├── App.jsx                  # Main App component
│   ├── App.css                  # App-level styles
│   ├── index.css                # Global styles & design tokens
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint configuration
```

---

## 🧩 Components Overview

### `Header.jsx`
The hero section displaying the Prime State brand with animated gradient background, logo, title, and tagline.

### `SearchForm.jsx`
Advanced filter panel with:
- Property type dropdown
- Price range slider (dual-handle)
- Bedroom min/max inputs
- Postcode text search
- Date picker for "added after" filter
- Update Results & Reset Filters buttons

### `PropertyCard.jsx`
Reusable property listing card featuring:
- Property image with hover zoom
- Price badge overlay
- Location, bedrooms, type info
- Add to favorites action
- Draggable for favorites

### `PropertyDetails.jsx`
Full property page with:
- Image gallery (thumbnails + fullscreen)
- Quick info badges (type, beds, price, location)
- Tabbed content (Description, Floor Plan, Map)
- Back navigation

### `ThemeToggle.jsx`
Floating action button for switching between light and dark themes with animated sun/moon icon.

### `Footer.jsx`
Site footer with brand info, quick links, legal links, and social media icons.

---

## 🎨 Theming

The application uses CSS custom properties (variables) for theming. All design tokens are defined in `src/index.css`:

### Available Themes
- **Light Mode** - Clean, bright interface with soft shadows
- **Dark Mode** - Eye-friendly dark interface with subtle glows

### Key Design Tokens
```css
--primary          /* Primary brand color */
--secondary        /* Secondary accent color */
--bg-body          /* Main background */
--bg-surface       /* Card/panel backgrounds */
--text-main        /* Primary text color */
--text-muted       /* Secondary text color */
--border-color     /* Border colors */
--shadow-sm/md/lg  /* Shadow depths */
--radius-sm/md/lg  /* Border radius values */
--spacing-xs/sm/md /* Spacing scale */
```

---

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

The project uses **Vitest** with **React Testing Library** for component testing.

---

## 📜 Scripts

| Command           | Description              |
|-------------------|--------------------------|
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
| `npm run test`    | Run tests with Vitest    |

---

## 🙏 Credits

### Assets
- **Favicon/Logo**: [Flaticon - Real Estate Agent Icons](https://www.flaticon.com/free-icons/real-estate-agent)
- **Property Images**: [Pexels](https://pexels.com) & [Unsplash](https://unsplash.com) (Free to use)

### Libraries
Special thanks to all the open-source libraries that make this project possible:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- [React Image Gallery](https://github.com/xiaolin/react-image-gallery)

---

## 👨‍💻 Author

<div align="center">

### Developed by [The Seeker](https://github.com/theseekerofficial)

<a href="https://github.com/theseekerofficial">
  <img src="https://img.shields.io/badge/GitHub-theseekerofficial-181717?logo=github&logoColor=white&style=for-the-badge" alt="GitHub Profile" />
</a>

---

</div>
