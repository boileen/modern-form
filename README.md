# Boileen Graphics Registration Form

An interactive registration form built with HTML, CSS, and JavaScript for the Boileen Graphics platform. Users can create an account to start designing with comprehensive form validation.

## Features

- **Interactive Form Validation**
  - Full Name validation
  - Email validation with regex pattern matching
  - Phone number validation (11-digit format)
  - Password strength indicator with visual feedback
  - Real-time error messages

- **User-Friendly Design**
  - Clean, modern card-based layout
  - Responsive design that works on mobile and desktop
  - Smooth animations and transitions
  - Password strength bars for visual feedback
  - Success message on form submission

- **Accessibility**
  - Semantic HTML structure
  - Proper form labels and error messaging
  - Clear visual feedback for user interactions

## Project Structure

```
form/
├── index.html      # Main HTML file with form structure
├── index.js        # Form validation and interaction logic
├── styles.css      # Styling and layout
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5** - Semantic form structure
- **CSS3** - Styling with Flexbox and modern design patterns
- **JavaScript (Vanilla)** - Form validation and dynamic interactions

## Form Fields

1. **Full Name** - Required text input
2. **Email Address** - Required email input with validation
3. **Phone Number** - Required 11-digit phone number
4. **Password** - Required password with strength indicator

## Validation Rules

| Field | Rule |
|-------|------|
| Full Name | Cannot be empty |
| Email | Must be a valid email format (user@domain.com) |
| Phone | Must be exactly 11 digits |
| Password | Must meet minimum length and strength requirements |

## How to Use

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Fill out the registration form
4. The form will validate inputs in real-time
5. Submit the form once all fields are valid

## Deployment

### GitHub Pages
1. Push the repository to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch as the deployment source
4. Your form will be live at `https://username.github.io/form/`

### Other Platforms
- **Vercel**: Connect your GitHub repo for automatic deployment
- **Netlify**: Drag and drop the folder or connect your repo
- **Traditional Hosting**: Upload all files to your web server

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Backend integration for form submission
- [ ] Database storage for user accounts
- [ ] Email verification
- [ ] Password strength requirements display
- [ ] Social login options
- [ ] Two-factor authentication

## License

MIT License - feel free to use and modify this project as needed.

## Author

Boileen Graphics Team
