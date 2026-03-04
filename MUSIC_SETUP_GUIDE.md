# How to Add Your Own Music to the Website

## Current Setup ✓
Your website now has a **Play/Pause button** in the top-right navbar that controls background music.

## How to Add Your Own Music

### Option 1: Replace the Placeholder Audio (EASIEST)
1. Find or download an audio file in one of these formats:
   - **MP3** (most common, highly recommended)
   - WAV
   - OGG
   - WebM

2. Save your audio file as: `background-audio.mp3`

3. Place it in this location:
   ```
   client/public/background-audio.mp3
   ```

4. The player will automatically use your music!

### Option 2: Provide a URL to Online Audio
If you want to use music from a URL:
1. Get a direct link to an MP3 file
2. Open [Navbar.tsx](./client/src/components/Navbar.tsx)
3. Change this line:
   ```tsx
   <AudioPlayer audioSrc="/background-audio.mp3" />
   ```
   To:
   ```tsx
   <AudioPlayer audioSrc="https://your-url-here.mp3" />
   ```

## How the Player Works

### Visual Location
- **Position**: Top-right corner of the navbar (next to Search icon)
- **Styling**: Matches your site's cinematic aesthetic
- **Font**: Same uppercase, letter-spaced font as navigation

### Features
- ✓ Click **Play** to start the music (loops continuously)
- ✓ Click **Pause** to stop anytime
- ✓ Music persists across page navigation
- ✓ Smooth hover effects
- ✓ Works on all screen sizes

### Keyboard Info
To control volume, users can right-click the button and access browser controls.

## File Locations

**Audio Player Component**: `client/src/components/AudioPlayer.tsx`
**Audio Hook**: `client/src/hooks/useAudioPlayer.ts`
**Audio File Location**: `client/public/background-audio.mp3`

## Tips for Best Results

### File Format
- **MP3** is most compatible and smallest file size
- Audio quality: 128-192 kbps is fine for background music
- Typical music file: 3-10 MB

### Music Recommendations
- Ambient music works best for background
- Instrumental tracks are less distracting
- Consider copyright/licensing
- Test volume levels for user comfort

### Performance
- Audio loops seamlessly
- File loads asynchronously (won't block page load)
- Minimal performance impact

## Troubleshooting

### Music not playing?
1. Check file is named exactly: `background-audio.mp3`
2. Check file is in: `client/public/` folder
3. Browser might have autoplay restrictions (users must click Play button first)
4. Check browser console for errors (F12)

### File didn't upload?
1. Make sure path is exactly: `client/public/background-audio.mp3`
2. File must be readable (not corrupted)
3. Try with a different audio file to test

## Current Audio File
A placeholder silent MP3 is currently in place (5KB file). Replace it with your own music!
