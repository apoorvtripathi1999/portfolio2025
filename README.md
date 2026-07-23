# Apoorv Tripathi — Portfolio 2025

A Windows 95-inspired portfolio website built with **React + Vite** and powered by **Sanity.io** as the headless CMS backend.

---

## 🚀 Running Locally

### Frontend (portfolio)

```bash
# 1. Activate the virtual environment (has Node.js installed)
. C:\Users\ApoorvTripathi\Desktop\gg\.venv\Scripts\Activate.ps1

# 2. Install dependencies (first time only)
npm install

# 3. Copy env file and fill in your Sanity project ID
cp .env.example .env

# 4. Start dev server
npm run dev
```

Open: http://localhost:5173

### Sanity Studio (admin panel)

```bash
# From the studio/ directory
cd studio

. C:\Users\ApoorvTripathi\Desktop\gg\.venv\Scripts\Activate.ps1

npm install   # first time only
npm run dev
```

Open: http://localhost:3333

---

## 🔧 Sanity Setup (First Time)

### Step 1 — Create a free Sanity account
Go to https://sanity.io and sign up (free, no credit card needed).

### Step 2 — Create a new project
In the Sanity dashboard, create a new project. Name it "portfolio" or similar.
Copy the **Project ID** shown on the project page.

### Step 3 — Set up the frontend .env file
Create a `.env` file in the root `portfolio2025/` directory:

```
VITE_SANITY_PROJECT_ID=your_actual_project_id_here
VITE_SANITY_DATASET=production
```

### Step 4 — Update the Studio config
Open `studio/sanity.config.js` and replace `YOUR_PROJECT_ID` with your actual project ID.

### Step 5 — Add CORS origins
In your Sanity project settings → API → CORS Origins, add:
- `http://localhost:5173` (frontend dev)
- `http://localhost:3333` (studio dev)
- Your deployed portfolio URL (when you deploy)

### Step 6 — Seed your content
Create a **write token** in Sanity: Project → Settings → API → Tokens → Add API Token (Editor role).

Then run the seed script to populate all your existing data:

```bash
cd studio
npm install
set SANITY_PROJECT_ID=your_project_id
set SANITY_TOKEN=your_write_token_here
node seed.js
```

This will create all your current content (work experience, projects, articles, research, education, technologies, music playlists) in Sanity automatically.

### Step 7 — Upload your resume PDF
- Open Sanity Studio at http://localhost:3333
- Click **Resume** in the left sidebar
- Click **Create new**
- Upload your PDF file
- Publish

---

## 📁 Project Structure

```
portfolio2025/
├── src/
│   ├── App.jsx                        # Root component
│   ├── lib/
│   │   ├── sanityClient.js            # Shared Sanity client
│   │   └── queries.js                 # All GROQ queries
│   ├── components/
│   │   ├── apps/                      # Content windows (fetch from Sanity)
│   │   │   ├── AboutContent.jsx
│   │   │   ├── WorkExperienceContent.jsx
│   │   │   ├── ProjectsContent.jsx
│   │   │   ├── ArticlesContent.jsx
│   │   │   ├── ResearchContent.jsx
│   │   │   ├── EducationContent.jsx
│   │   │   ├── TechnologiesContent.jsx
│   │   │   ├── ResumeContent.jsx
│   │   │   └── MusicContent.jsx
│   │   ├── shared/
│   │   │   ├── DesktopIcon.jsx
│   │   │   └── LoadingState.jsx       # Reusable loading/error UI
│   │   └── system/                    # OS shell components
│   └── store/
│       └── windowsStore.js            # Zustand state
│
└── studio/                            # Sanity Studio (admin panel)
    ├── sanity.config.js               # Studio configuration
    ├── seed.js                        # Content seed script
    ├── package.json
    └── schemaTypes/
        ├── index.js                   # Schema barrel export
        ├── about.js
        ├── workExperience.js
        ├── project.js
        ├── article.js
        ├── research.js
        ├── education.js
        ├── technology.js
        ├── resume.js
        └── musicPlaylist.js
```

---

## ✏️ Updating Content

Once Sanity is set up, you never need to edit code to update content.

| What you want to update | How |
|---|---|
| Add a new project | Studio → Projects → Create new |
| Update bio text | Studio → About Me → Edit |
| Add a new job | Studio → Work Experience → Create new |
| Update resume PDF | Studio → Resume → Upload new file → Publish |
| Add a new article | Studio → Articles → Create new |
| Add/remove a skill | Studio → Technology Categories → Edit items |
| Add a playlist | Studio → Music Playlists → Create new |

---

## 🌐 Deployment

### Frontend → Vercel (free)
1. Push to GitHub
2. Import repo at vercel.com
3. Set environment variables: `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET`
4. Deploy

### Studio → Sanity.io hosting (free)
```bash
cd studio
npx sanity deploy
```
Your studio will be hosted at `https://your-project.sanity.studio`.

---

## Tech Stack

- **Frontend:** React 19, Vite 7, Styled Components, Zustand, @dnd-kit
- **CMS:** Sanity.io (free tier)
- **State:** Zustand
- **Node.js:** Installed via `nodeenv` inside `.venv/`