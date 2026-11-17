# ANGEL — A Birthday Experience ♡

A romantic, interactive birthday website for Anjali (Angel), made with HTML, CSS and vanilla JavaScript.

## 1. Preview on your Windows PC

1. Extract `ANGEL-BIRTHDAY.zip`.
2. Open the `ANGEL-BIRTHDAY` folder.
3. Double-click `index.html`.
4. It opens in Chrome. No installation or server is required.

An internet connection is recommended for the Google Fonts. The website itself works without music and does not require a backend.

## 2. Add your photos

Open `assets/photos/` and add your photos using these exact file names:

| File name | What to put there |
|---|---|
| `photo1.jpg` | Your favourite photo together |
| `photo2.jpg` | A cute selfie / portrait |
| `photo3.jpg` | A memorable moment |
| `photo4.jpg` | A candid photo |
| `photo5.jpg` | A celebration / outing photo |
| `photo6.jpg` | A favourite picture of Anjali |
| `photo7.jpg` | A favourite picture of you both |
| `photo8.jpg` | One more special memory |

Important:
- Keep the exact names: `photo1.jpg` through `photo8.jpg`.
- Use JPG or JPEG images. If your image is PNG or WEBP, convert it to JPG or rename the reference in `script.js`.
- If you have fewer than 8 photos, the other slots show a gentle placeholder.
- For best mobile loading, resize very large photos to around 1200–1600 pixels on the longest side and keep each file ideally below 1.5 MB.
- Do not use private photos you do not want accessible to anyone who has the website link. A public website's image files can be viewed by visitors.

## 3. Optional images folder

`assets/images/` contains `photo-placeholder.svg`, used when a personal photo has not been added. You can keep it as it is.

`assets/icons/` is reserved for optional icons if you want to add more later.

## 4. Edit birthday messages

Open `script.js` in Notepad or VS Code. Near the top, find `const CONTENT = { ... }`.

You can edit:
- `gifts`: five gift messages
- `balloons`: seven balloon messages
- `pickupLines`: 15 romantic Hinglish pickup lines
- `reasons`: 10 reasons
- `photoCaptions`: captions under the photos
- `signature`: your sign-off

The birthday letter is in `index.html`. Search for `A Letter For My Angel` and edit the paragraphs inside `letter-paper`.

The relationship date is currently set to 17 January 2026 in the timeline.

## 5. Test before sharing

- [ ] Open `index.html` in Chrome.
- [ ] Tap “Open your surprise”.
- [ ] Open all five gift boxes.
- [ ] Pop all seven balloons.
- [ ] Tap “One more line, please”.
- [ ] Reveal the heart messages.
- [ ] Check the relationship timeline.
- [ ] Add photos and tap them to open the photo viewer.
- [ ] Open the letter envelope.
- [ ] Blow out all three candles.
- [ ] Test the replay button.
- [ ] Check the website on a mobile phone.

## 6. Publish it online

You can host the folder using GitHub and Cloudflare Pages (or your preferred static hosting). Upload the contents of this folder, keeping the same folder structure. Set the project root to the folder containing `index.html` and use no build command for a plain static site.

Before publishing, add your selected photos and remember that anyone with the public link may be able to view them.

Made with love for Anjali (Angel). ♡
