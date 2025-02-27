# Circular Time Wheel Selector

A modern, elegant time selection interface with circular wheels for hours and minutes.

## Features

- Intuitive circular wheel interface for selecting hours (0-6) and minutes (in 15-minute increments)
- Clean, flat design with minimal aesthetics
- Touch and mouse gesture support for rotating the wheels
- Responsive layout that works on both desktop and mobile devices
- Real-time display of the selected time in a readable format

## Usage

1. Rotate or click on the hour wheel (left) to select hours from 0 to 6
2. Rotate or click on the minute wheel (right) to select minutes in 15-minute increments (00, 15, 30, 45)
3. The selected time appears in the input field below the wheels
4. Click "Submit" to confirm your selection

## Implementation Details

The time selector is built using vanilla JavaScript and CSS, with no external dependencies. Key technical features include:

- CSS variables for easy theming
- Circular positioning calculations for wheel items
- Touch and mouse event handling for intuitive rotation
- Smooth transitions and subtle animations for better user experience

## Customization

You can easily customize the appearance by modifying the CSS variables in the `:root` selector:


```
:root {
--primary-color: #2563eb;
--primary-light: #60a5fa;
--primary-dark: #1d4ed8;
--background: #f8fafc;
--surface: #ffffff;
--on-primary: #ffffff;
--on-surface: #0f172a;
--border: #e2e8f0;
--shadow: rgba(0, 0, 0, 0.04);
}
```

## Browser Support

The time selector works in all modern browsers that support ES6 JavaScript and modern CSS features:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License