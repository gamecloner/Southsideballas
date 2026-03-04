# Background Audio Setup

## Audio File Location
Place your background audio file at: `client/public/background-audio.mp3`

## Current Status
✅ Audio player component created and integrated into the navbar
✅ Play/Pause buttons added with matching site styling
✅ Button uses the same font and styling as the rest of the site

## How to Add Your Own Audio

1. Find or create an audio file (MP3, WAV, or OGG format)
2. Save it as `background-audio.mp3` in the `client/public/` directory
3. The audio will loop automatically when playing
4. Users can pause/resume using the button in the top navigation bar

## Features Implemented
- **Location**: Top right of navbar (next to Search button)
- **Styling**: Matches existing site typography with:
  - `uppercase tracking-widest` text styling
  - `font-medium` weight 
  - Same hover effects as navigation items
  - Play/Pause icons from lucide-react
- **Functionality**:
  - Click to play background music
  - Click to pause at any time
  - Loops continuously when playing
  - Audio controls are persistent across page navigation

## Testing
The audio player should appear in the top-right corner of the navbar with Play/Pause controls.
