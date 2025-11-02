# Frantic Type ❄️

A fast-paced typing speed test application with a winter theme and unique word selection algorithm designed to improve typing proficiency through targeted finger exercises.

## Features

### 🎯 Core Functionality
- **Multiple Test Durations**: Choose from 15, 30, 60, or 120-second typing tests
- **Real-time Statistics**: Track your Words Per Minute (WPM), accuracy percentage, and raw typing speed
- **Instant Feedback**: Live highlighting of correct and incorrect characters as you type
- **Restart Capability**: Quick restart function to retry tests immediately

### 🎨 Visual Design
- **Winter Theme**: Clean, dark interface with snowflake cursor animation
- **Snowflake Cursor**: Custom animated snowflake cursor that follows mouse movement
- **Responsive Design**: Works on various screen sizes and devices
- **Focus Management**: Clear focus indicators and auto-focus functionality

### 🧠 Smart Word Selection
The application uses a sophisticated word selection algorithm based on finger-specific typing patterns:

- **Left Hand Targeting**: 
  - Index finger bigrams (rf/fr, ft/tf, fv/vf, etc.)
  - Middle finger combinations
  - Ring finger patterns
- **Right Hand Targeting**:
  - Index, middle, and ring finger specific word sets
- **Balanced Practice**: Combines words to create comprehensive finger exercise routines

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No additional installations required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start typing immediately!

### Usage
1. **Select Duration**: Click on one of the time buttons (15, 30, 60, or 120 seconds)
2. **Focus**: Click anywhere or press any key to focus the input field
3. **Start Typing**: Begin typing the displayed words - the test starts automatically
4. **View Results**: When time expires, see your WPM, accuracy, and raw speed
5. **Restart**: Click "restart test" to try again

## File Structure

```
Frantic_Type/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── main.js             # Core typing test logic
└── README.md           # This file
```

## Technical Details

### Word Categories
The application categorizes words based on typing finger usage:
- `lftIndex`: Words targeting left index finger adjacent bigrams
- `lftMiddle_1` & `lftMiddle_2`: Left middle finger exercises
- `lftRing`: Left ring finger patterns
- `rightIndex`, `rightMiddle`, `rightRing`: Corresponding right-hand patterns

### Performance Metrics
- **WPM**: Standard words per minute calculation (5 characters = 1 word)
- **Accuracy**: Percentage of correctly typed characters
- **Raw Speed**: Total characters typed per minute regardless of errors

### Browser Compatibility
- Supports all modern browsers with ES6+ features
- Uses CSS animations and transitions
- Responsive design for mobile and desktop

## Contributing

Feel free to contribute to this project by:
1. Reporting bugs or suggesting features
2. Improving the word selection algorithm
3. Enhancing the visual design
4. Adding new test modes or features

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by modern typing test applications
- Word lists curated for optimal finger training
- Winter theme design for a calming typing experience

---

**Happy Typing!** ❄️ Improve your typing speed one word at a time.