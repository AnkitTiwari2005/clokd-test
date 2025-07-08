# Clokd - Class Schedule Tracker

![Clokd Banner](https://clokd.netlify.app/)

**A mobile-first web app for tracking class schedules with friends in real-time**

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-blue?logo=github)](https://github.com/yourusername/clokd/settings/pages)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Features ✨

- **Real-time Status Tracking**  
  See who's in class or free at a glance with color-coded indicators
- **Detailed Timetable Views**  
  View complete daily schedules with class details
- **Friend Nickname Customization**  
  Personalize friends with custom nicknames
- **Light/Dark Mode**  
  Toggle between themes based on preference or time of day
- **One-Click Calling**  
  Instantly call friends directly from their profile
- **Responsive Design**  
  Optimized for all devices - mobile, tablet, and desktop
- **Smart Status Indicators**  
  Know when friends are in class, on break, or free

## Getting Started 🚀

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- GitHub account (for deployment)

### Deployment to GitHub Pages
1. Create a new GitHub repository named `clokd`
2. Commit all files to the `main` branch
3. Go to Repository Settings → Pages
4. Set source to "Deploy from a branch"
5. Select branch: `main`, folder: `/ (root)`
6. Save - Your app will be live at:
   `https://<username>.github.io/clokd`

## How It Works 💡

Clokd helps students coordinate with friends by providing real-time visibility into class schedules:

```mermaid
graph TD
    A[Load Friend Data] --> B[Check Current Time]
    B --> C{Is friend in class?}
    C -->|Yes| D[Show Class Details]
    C -->|No| E[Show Free Status]
    D --> F[Update Dashboard]
    E --> F
    F --> G[User Interaction]
    G --> H[View Detailed Schedule]
    H --> I[Set Nicknames]
    I --> J[One-Click Calling]
```

## Security Notes 🔒

- Basic anti-debugging measures implemented
- Context menu and developer tools shortcuts disabled
- For production deployments:
  - Minify and obfuscate JavaScript files
  - Use HTTPS for all connections
  - Implement proper CORS headers

## Technology Stack 🛠️

**Frontend:**
- HTML5
- CSS3 (Flexbox, Grid, Variables)
- JavaScript (ES6+)

**Libraries & Tools:**
- SVG Icons
- localStorage (for theme and alias persistence)
- Google Fonts (Inter)

**Deployment:**
- GitHub Pages

## Project Structure 📁

```
clokd/
├── assets/
│   └── icons/
│       ├── linkedin.svg
│       ├── moon.svg
│       ├── phone.svg
│       └── sun.svg
├── data.js
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Contributing 🤝

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Created by [Ankit Tiwari](https://www.linkedin.com/in/ankit-k-tiwari/)
- Inspired by students' need for better class coordination
- SVG icons from Heroicons and Simple Icons

---

**Get organized, stay connected, and never disturb a friend in class again!**  
[![Open in GitHub](https://img.shields.io/badge/View-GitHub-181717?logo=github)](https://github.com/yourusername/clokd)
