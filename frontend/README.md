# BF Meta Hub - Frontend

A modern, responsive web application for Battlefield 6 tactical information and community hub.

## 🚀 Features

- **Modern Design**: Clean, tactical-inspired UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Video Background**: Immersive video background with controls
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Component-Based**: Modular Vue 3 components with Composition API
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Performance Optimized**: Lazy loading, image optimization, and efficient rendering

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Vue Next** - Beautiful icon library
- **@vueuse/motion** - Animation library for Vue
- **@vueuse/core** - Collection of Vue composition utilities

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Vue components
│   ├── Header.vue      # Navigation header
│   ├── Hero.vue        # Hero section with video
│   ├── LoadoutsSection.vue  # Meta loadouts section
│   ├── NewsSection.vue # News and updates
│   ├── FeaturesSection.vue  # Features showcase
│   ├── GuidesSection.vue    # Tactical guides
│   └── Footer.vue      # Footer component
├── composables/        # Vue composables
│   ├── useVideo.js     # Video control logic
│   └── useAnimations.js # Animation utilities
├── constants/          # App constants
│   └── index.js        # Color, typography, etc.
├── utils/              # Utility functions
│   ├── animations.js   # Animation presets
│   ├── responsive.js   # Responsive utilities
│   └── images.js       # Image handling utilities
├── App.vue            # Main app component
├── main.js            # App entry point
└── style.css          # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: #F97316 (Orange)
- **Dark**: #0f0f0f
- **Darker**: #0a0a0a
- **Medium**: #1a1a1a
- **Light**: #2a2a2a

### Typography
- **Heading Font**: Bebas Neue
- **Body Font**: Roboto

### Components
- **Cards**: Gradient backgrounds with hover effects
- **Buttons**: Orange primary, transparent secondary
- **Navigation**: Fixed header with backdrop blur
- **Sections**: Consistent spacing and borders

## 🎬 Video Integration

The hero section features a full-screen video background with:
- Autoplay on load
- Mute by default
- Play/pause controls
- Responsive scaling
- Fallback for mobile devices

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎭 Animations

- **Fade In**: Smooth opacity transitions
- **Slide Up**: Content slides up on scroll
- **Hover Effects**: Scale and lift animations
- **Staggered**: Delayed animations for lists
- **Particles**: Floating background elements

## 🔧 Customization

### Adding New Sections
1. Create a new Vue component in `src/components/`
2. Import and add to `App.vue`
3. Add navigation link in `Header.vue`

### Modifying Styles
- Use Tailwind classes for styling
- Custom CSS variables in `style.css`
- Component-specific styles in `<style scoped>`

### Adding Animations
- Use `@vueuse/motion` for animations
- Import animation presets from `utils/animations.js`
- Use composables for complex animations

## 🚀 Performance

- **Lazy Loading**: Images load as they enter viewport
- **Code Splitting**: Components loaded on demand
- **Optimized Images**: WebP format with fallbacks
- **Efficient Animations**: GPU-accelerated transforms
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 🐛 Troubleshooting

### Video Not Playing
- Check video file path in `public/video/`
- Ensure video format is supported (MP4)
- Check browser autoplay policies

### Animations Not Working
- Verify `@vueuse/motion` is installed
- Check component imports
- Ensure proper motion component usage

### Styling Issues
- Check Tailwind CSS configuration
- Verify custom CSS variables
- Check for conflicting styles

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.