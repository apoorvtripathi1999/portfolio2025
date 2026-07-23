// ============================================================
// GROQ Queries for all portfolio content sections
// ============================================================

/** About — singleton document */
export const ABOUT_QUERY = `*[_type == "about"][0]{ bioText }`;

/** Work Experience — ordered by display order */
export const WORK_EXPERIENCE_QUERY = `
  *[_type == "workExperience"] | order(order asc) {
    _id,
    jobTitle,
    company,
    location,
    startDate,
    endDate,
    isCurrent,
    description,
    bullets,
    order
  }
`;

/** Projects — ordered by display order, then year descending */
export const PROJECTS_QUERY = `
  *[_type == "project"] | order(order asc, year desc) {
    _id,
    title,
    year,
    category,
    description,
    techStack,
    githubUrl,
    liveUrl,
    "imageUrl": image.asset->url
  }
`;

/** Articles — ordered by display order */
export const ARTICLES_QUERY = `
  *[_type == "article"] | order(order asc) {
    _id,
    title,
    publishDate,
    readTime,
    description,
    url
  }
`;

/** Research — ordered by display order */
export const RESEARCH_QUERY = `
  *[_type == "research"] | order(order asc) {
    _id,
    title,
    description,
    publicationUrl,
    status
  }
`;

/** Education — ordered by display order */
export const EDUCATION_QUERY = `
  *[_type == "education"] | order(order asc) {
    _id,
    degree,
    institution,
    startYear,
    endYear,
    gpa,
    description,
    highlights,
    isCertification
  }
`;

/** Technologies — ordered by display order */
export const TECHNOLOGIES_QUERY = `
  *[_type == "technology"] | order(order asc) {
    _id,
    categoryName,
    color,
    items
  }
`;

/** Resume — fetch the latest uploaded PDF file URL */
export const RESUME_QUERY = `
  *[_type == "resume"] | order(_updatedAt desc)[0] {
    label,
    updatedAt,
    "fileUrl": resumeFile.asset->url
  }
`;

/** Music Playlists — ordered by display order */
export const MUSIC_QUERY = `
  *[_type == "musicPlaylist"] | order(order asc) {
    _id,
    title,
    platform,
    mood,
    description,
    url
  }
`;
