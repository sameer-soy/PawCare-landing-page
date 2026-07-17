/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
          "colors": {
                  "tertiary-fixed-dim": "#e7c268",
                  "primary-container": "#6da59e",
                  "surface-dim": "#dcdad2",
                  "on-primary-fixed": "#00201d",
                  "outline": "#707977",
                  "surface": "#fbf9f1",
                  "tertiary-fixed": "#ffdf96",
                  "on-secondary-fixed": "#410006",
                  "surface-container-lowest": "#ffffff",
                  "outline-variant": "#bfc8c6",
                  "secondary-fixed-dim": "#ffb3b0",
                  "tertiary": "#765a05",
                  "inverse-surface": "#30312c",
                  "secondary-fixed": "#ffdad8",
                  "on-tertiary-fixed-variant": "#5a4400",
                  "primary-fixed": "#b4eee6",
                  "on-secondary-container": "#762527",
                  "on-tertiary": "#ffffff",
                  "on-background": "#1b1c17",
                  "surface-variant": "#e4e3db",
                  "primary": "#2f6761",
                  "on-tertiary-container": "#413000",
                  "secondary": "#9c4141",
                  "inverse-on-surface": "#f3f1e9",
                  "on-secondary": "#ffffff",
                  "surface-container-high": "#eae8e0",
                  "on-primary-container": "#003a35",
                  "surface-tint": "#2f6761",
                  "background": "#fbf9f1",
                  "surface-bright": "#fbf9f1",
                  "on-surface": "#1b1c17",
                  "on-error": "#ffffff",
                  "on-primary": "#ffffff",
                  "surface-container-highest": "#e4e3db",
                  "on-tertiary-fixed": "#251a00",
                  "secondary-container": "#fe8e8b",
                  "on-error-container": "#93000a",
                  "on-primary-fixed-variant": "#114f4a",
                  "on-secondary-fixed-variant": "#7d2a2c",
                  "inverse-primary": "#98d1ca",
                  "tertiary-container": "#b89742",
                  "primary-fixed-dim": "#98d1ca",
                  "surface-container": "#f0eee6",
                  "on-surface-variant": "#404947",
                  "error": "#ba1a1a",
                  "surface-container-low": "#f5f4ec",
                  "error-container": "#ffdad6"
          },
          "borderRadius": {
                  "DEFAULT": "0.25rem",
                  "lg": "0.5rem",
                  "xl": "0.75rem",
                  "2xl": "1rem",
                  "3xl": "1.5rem",
                  "full": "9999px"
          },
          "spacing": {
                  "margin-mobile": "16px",
                  "margin-desktop": "40px",
                  "gutter": "24px",
                  "container-max": "1200px",
                  "base": "8px"
          },
          "fontFamily": {
                  "headline-md": ["Nunito Sans"],
                  "headline-lg": ["Nunito Sans"],
                  "body-md": ["Inter"],
                  "body-lg": ["Inter"],
                  "display": ["Nunito Sans"],
                  "label-md": ["Inter"],
                  "label-sm": ["Inter"]
          },
          "fontSize": {
                  "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                  "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                  "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                  "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                  "display": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                  "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                  "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
          }
    }
  }
};