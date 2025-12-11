# Zetter Website

My thesis project for Futuregames Stockholm - December 2025

## Quick Info

**Student:** [Ankita Singh]  
**Program:** Frontend Development  
**School:** Futuregames Stockholm  
**Project Type:** Graduation Project  
**Time Spent:** ~3 weeks  

## What is This?

This is a complete e-commerce website I built for Zetter, a healthy food startup. It's my first real full-stack project and I learned A TON doing it!

## Tech Stack (What I Used)

- **Next.js 14** - This was new for me, App Router took some getting used to
- **TypeScript** - Caught so many bugs before they happened!
- **Tailwind CSS** - Made styling way faster than regular CSS
- **Framer Motion** - For the smooth animations
- **next-intl** - Multi-language support (English & Swedish)

## The Pages I Built

1. **Homepage** - Big bold hero section with gradient background
2. **Products** - Shows the peanut butter product (will add more later)
3. **About** - Company mission and values
4. **Contact** - Form that works (kind of - needs backend)

## Features

## Features

 Multi-language (EN/SV) with language switcher  
 Fully responsive design (mobile, tablet, desktop)  
 Hamburger menu with smooth animations  
 5 complete pages (Home, Products, About, Contact, Cart)  
 Shopping cart functionality  
 Add/remove items  
 Quantity management  
 Cart persistence (localStorage)  
 Real-time cart count badge  
 Custom confirmation modals  
 Empty cart state  
 Price calculations  
 Professional color scheme  
 Smooth Framer Motion animations
 
## Things That Were Hard

### 1. TypeScript Errors with Framer Motion
The motion components kept throwing type errors. I eventually fixed it by using regular divs in some places. Not perfect but it works!

### 2. Multi-language Routing
Getting the middleware to work properly was confusing. Followed the next-intl docs but had to troubleshoot quite a bit. Finally got it working though!

### 3. Responsive Design
Making everything look good on mobile AND desktop was harder than I thought. Used Chrome DevTools a lot for testing different screen sizes.

### 4. Hamburger Menu Animation
The three lines turning into an X shape - took me forever! Tried different approaches before finding one that worked smoothly.

## How to Run This
```bash
# Install everything
npm install

# Start the dev server
npm run dev

# Go to http://localhost:3000
```

## What I Learned

- **Next.js is powerful but has a learning curve** - The App Router is different from Pages Router
- **TypeScript saves time** - Even though it feels slower at first
- **Tailwind is amazing** - Once you learn the classes, you code SO fast
- **Multi-language is easier than expected** - next-intl made it pretty simple
- **Testing is important** - Wish I had more time for proper testing
- **Git is essential** - Saved me multiple times when I broke things

## Future Plans

If I had more time / when I continue this:

- [ ] Add shopping cart that actually works
- [ ] Connect to Stripe or Klarna for payments
- [ ] User accounts and login
- [ ] Product reviews
- [ ] Admin panel for adding products
- [ ] Connect contact form to real email
- [ ] Add more product images
- [ ] Blog section maybe?
- [ ] Performance optimization

## Problems I Still Need to Fix

- Some TypeScript warnings (they don't break anything though)
- Contact form doesn't actually send emails yet
- Need real product images instead of emoji
- Could use better loading states
- Mobile menu could be even smoother

## File Structure
```
zetter/
├── app/
│   ├── [locale]/              # Language routing
│   │   ├── page.tsx          # Homepage
│   │   ├── layout.tsx        # Main layout wrapper
│   │   ├── globals.css       # Global styles
│   │   ├── about/            # About page
│   │   ├── products/         # Products page
│   │   └── contact/          # Contact page
├── components/
│   ├── Navigation.tsx         # Header + hamburger menu
│   └── Footer.tsx            # Footer
├── messages/
│   ├── en.json               # English text
│   └── sv.json               # Swedish text
├── public/
│   └── images/               # Where product photos go
├── i18n.ts                   # Language config
├── middleware.ts             # Handles language routing
└── tailwind.config.ts        # Colors and styling config
```

## Development Notes

**Started:** November 22, 2025  
**Finished:** December 10, 2025  
**Total Commits:** [Will be many by the end!]  
**Coffee Consumed:** Too much 
**Stack Overflow Visits:** Lost count 

## Resources That Helped Me

- [Next.js Documentation](https://nextjs.org/docs) - Read this A LOT
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - For styling reference
- [Framer Motion Examples](https://www.framer.com/motion/) - For animation inspiration
- Stack Overflow - For specific problems
- YouTube tutorials - For understanding concepts
- My classmates - For moral support!

## Acknowledgments

Thanks to:
- **Futuregames teachers** - For all the help
- **My classmates** - For feedback and support
- **Zetter** - For letting me use their brand
- **Coffee** - Lots of it

## License

This is a student project. Code is mine but Zetter brand belongs to the company.

---

**Made by [Ankita SIngh]** 
Frontend Development Student  
Futuregames Stockholm, December 2024  

If you have questions: [ankita.shibu.singh@gmail.com]

*P.S. - This was hard but really fun! First time building something this for a brand.*