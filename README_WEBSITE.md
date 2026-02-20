# Portfolio Website - Harshil

A modern, responsive portfolio website showcasing my skills, projects, and tech stack as an AI/ML Engineer, Full Stack Developer, and Flutter Developer.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: 
  - Typing animation on the hero section
  - Smooth scrolling navigation
  - Scroll-to-top button
  - Animated sections on scroll
  - Hover effects on cards and buttons
- **Tech Stack Showcase**: Comprehensive display of all technologies I work with
- **Featured Projects**: Highlighted projects with GitHub links
- **GitHub Stats Integration**: Live GitHub statistics and contribution graphs
- **Contact Section**: Easy ways to get in touch

## 🚀 Tech Stack

The portfolio website is built with:
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks, pure JavaScript for interactions
- **Font Awesome**: Icons for social media and tech stack

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive features and animations
└── README_WEBSITE.md   # This documentation file
```

## 🎨 Sections

1. **Navigation**: Fixed navbar with smooth scroll links
2. **Hero Section**: Introduction with typing animation
3. **About**: Personal introduction and highlights
4. **Tech Stack**: Categorized display of technologies:
   - Mobile Development (Flutter, Dart, GetX, SQLite)
   - AI/Deep Learning (PyTorch, TensorFlow, Python)
   - Frontend & Backend (Next.js, TypeScript, NestJS, Node.js)
   - Databases & ORM (PostgreSQL, MongoDB, Prisma)
   - Tools & DevOps (Git, GitHub, Docker, VS Code)
   - AI Focus Areas (Computer Vision, NLP, LLMs)
5. **Projects**: Featured projects with descriptions and tech tags
6. **GitHub Stats**: Live statistics from GitHub
7. **Contact**: Contact information and social links

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the branch to deploy (e.g., `main` or `copilot/create-portfolio-website`)
4. Select root directory `/`
5. Click "Save"
6. Your site will be available at: `https://26harshil.github.io/26harshil/`

### Option 2: Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Deploy with default settings
5. Your site will be live with a custom URL

### Option 3: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with default settings
4. Get instant deployment with preview URLs

### Option 4: Local Development

To run locally for development:

```bash
# Navigate to the project directory
cd /path/to/portfolio

# Start a simple HTTP server (Python 3)
python3 -m http.server 8000

# Or use Node.js http-server
npx http-server -p 8000

# Open in browser
# http://localhost:8000
```

## 🎯 Customization

### Update Personal Information

1. **index.html**: 
   - Update social media links (GitHub, LinkedIn, Email)
   - Modify project descriptions and links
   - Update contact information

2. **script.js**: 
   - Customize typing animation phrases in the `phrases` array
   - Update console Easter egg messages

3. **styles.css**: 
   - Modify color scheme in CSS variables at the top
   - Adjust spacing and typography
   - Customize animations

### Add New Projects

In `index.html`, duplicate a project card and update:

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Project Name</h3>
    <p class="project-description">
        Your project description here.
    </p>
    <div class="project-tech">
        <span class="tech-tag">Tech1</span>
        <span class="tech-tag">Tech2</span>
    </div>
    <div class="project-links">
        <a href="your-github-link" target="_blank" class="project-link">
            <i class="fab fa-github"></i> View Code
        </a>
    </div>
</div>
```

### Update Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #764ba2;    /* Secondary brand color */
    --accent-color: #FF6B6B;       /* Accent color */
    /* ... more variables */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Performance

- Lightweight: No heavy frameworks or libraries
- Fast loading: Minimal external dependencies
- Optimized images: GitHub Stats are lazy-loaded
- Smooth animations: GPU-accelerated CSS transitions

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Features Breakdown

### JavaScript Interactions

1. **Typing Animation**: Auto-typing effect on hero section
2. **Mobile Navigation**: Hamburger menu for mobile devices
3. **Smooth Scrolling**: Animated scroll to sections
4. **Scroll to Top**: Button appears when scrolling down
5. **Active Navigation**: Highlights current section in navbar
6. **Intersection Observer**: Fade-in animations on scroll
7. **Easter Egg**: Console messages for developers

### CSS Features

1. **CSS Grid & Flexbox**: Modern layout techniques
2. **CSS Variables**: Easy theme customization
3. **Animations**: Smooth transitions and keyframe animations
4. **Gradient Backgrounds**: Modern gradient effects
5. **Responsive Design**: Mobile-first approach
6. **Hover Effects**: Interactive feedback on all elements

## 🔗 Links & Resources

- **GitHub Profile**: [github.com/26harshil](https://github.com/26harshil)
- **Projects**:
  - [NextGen Learners](https://github.com/26harshil/nextgen_learners)
  - [SPMS Project Hub](https://github.com/26harshil/spms_project_hub)
  - [Type CRUD](https://github.com/26harshil/type-crud)
  - [NextGen Learners Backend](https://github.com/26harshil/nextgen_learners_backend)

## 📄 License

This portfolio website is open source and available for personal use. Feel free to fork and customize for your own portfolio!

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:
1. Open an issue for bugs or suggestions
2. Submit a pull request for improvements
3. Share feedback

## 📞 Contact

- **Email**: harshil26@example.com
- **GitHub**: [@26harshil](https://github.com/26harshil)
- **LinkedIn**: [linkedin.com/in/26harshil](https://linkedin.com/in/26harshil)

---

Built with 💙 by Harshil | © 2024
