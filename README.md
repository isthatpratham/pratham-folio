# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, contact form functionality, and a beautiful design.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: GSAP-powered animations and transitions
- **Contact Form**: EmailJS integration for contact functionality
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock)
- **Icons**: Phosphor Icons
- **Build Tool**: Vite
- **Email Service**: EmailJS

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio_my
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `env.example` to `.env`
   - Fill in your EmailJS credentials:
     ```env
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Environment Variables

The following environment variables are required for the contact form to work:

- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Journey.tsx     # Journey/timeline
│   ├── Navigation.tsx  # Navigation bar
│   ├── Preloader.tsx   # Loading screen
│   └── Projects.tsx    # Projects showcase
├── images/              # Static images
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.tsx              # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Deployment

The project is configured for easy deployment:

1. **Build the project**: `npm run build`
2. **Deploy the `dist` folder** to your hosting service
3. **Set environment variables** in your hosting platform

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
