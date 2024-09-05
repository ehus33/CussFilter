# Hate Comment Filter Chrome Extension

This Chrome extension identifies and filters hateful comments from websites in real-time, using an external hate speech detection API.

## Features

- Filters hateful comments on web pages by hiding them.
- Allows users to enable/disable the filter via a popup interface.

## Setup

1. Clone or download this repository.
2. Load the extension in Chrome:
   - Go to `chrome://extensions/`.
   - Enable Developer Mode.
   - Click "Load unpacked" and select the folder containing the extension.
3. Modify the API URL in `content.js` to point to your hate speech detection service.

## API Integration

The extension uses a hate speech detection API to classify comments. You can integrate any API, such as:
- [Perspective API](https://www.perspectiveapi.com/)

Modify the `checkForHateSpeech` function in `content.js` with the correct API URL and API key.

## Usage

1. The filter is enabled by default.
2. Click on the extension icon in Chrome to toggle the filter on/off.
