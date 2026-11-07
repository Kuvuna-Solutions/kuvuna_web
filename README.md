# KUVUNA Website

> **Solutions that grow your business**  
> Business growth partner uniting Marketing, Technology, and Growth into one connected loop.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## ☁️ Deployment on Cloudflare Pages via GitHub

This project is optimized for deployment on **Cloudflare Pages**:

1. Push this repository to your **GitHub** account.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select this repository and configure the build settings:
   * **Framework preset**: `Vite`
   * **Build command**: `npm run build`
   * **Build output directory**: `dist`
   * **Environment variables** (Optional):
     * `VITE_GOOGLE_SCRIPT_URL`: Your published Google Apps Script web app URL (see below).
4. Click **Save and Deploy**.
5. The `public/_redirects` file ensures single-page application (SPA) client-side routing works for `/work`, `/how-we-work`, `/about`, and `/contact`.

---

## 📋 Lead Capture & Google Sheets Integration

The `/contact` form connects directly to your Google Sheet without third-party monthly subscriptions:

1. Create a new Google Sheet named **Kuvuna Inquiries**.
2. Label row 1 columns: `Timestamp` | `Name` | `Business` | `Email` | `Phone` | `Interests` | `Message` | `Status` | `Notes`
3. Go to **Extensions** > **Apps Script** in the sheet.
4. Copy and paste the contents of `apps-script/Code.gs`.
5. Update `TEAM_EMAILS` with your team notification inboxes.
6. Click **Deploy** > **New deployment** > Type: **Web app** > Access: **Anyone**.
7. Copy the generated Web App URL and add it to your Cloudflare environment variable `VITE_GOOGLE_SCRIPT_URL` or a local `.env` file:
   ```env
   VITE_GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/.../exec"
   ```

---

## 🎨 Brand Tokens & Colors

* **Midnight Navy**: `#12304A` (Headers, base ground, logo)
* **Amber**: `#F28C28` (Action buttons, spark of growth)
* **Teal**: `#2E8B7A` (Data, accents, central connector)
* **Slate**: `#5B6B7A` (Body text, captions)
* **Cloud**: `#EEF2F6` (Panels, light background)
* **Typography**: Poppins (Geometric & friendly)
