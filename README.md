````markdown
# Resume Builder

This project is a Resume Builder application built with React, Redux, and TypeScript. It allows users to create and manage their resumes with various sections such as Personal Details, Technical Skills, Employments, Certificates, and Educations. The application supports drag-and-drop functionality for reordering sections and uses `redux-persist` for state persistence.

## Features

- Personal Details: Manage personal information including name, contact details, and additional information.
- Technical Skills: Add, update, and delete technical skills with proficiency levels.
- Employments: Manage employment history with job titles, companies, dates, and descriptions.
- Certificates: Add and manage certificates with titles and dates.
- Educations: Manage educational background with titles and dates.
- Drag-and-Drop: Reorder sections using drag-and-drop functionality.
- State Persistence: Persist state using `redux-persist`.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for JavaScript apps.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- redux-persist: Persist and rehydrate a Redux store.
- shadcn/ui: UI components library.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/M-Bekheet/resume-builder.git
   cd resume-builder
   ```
````

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Add Sections**: Use the UI to add various sections to your resume.
2. **Edit Sections**: Click on a section to edit its details.
3. **Reorder Sections**: Drag and drop sections to reorder them.
4. **Save and Persist**: Your changes will be automatically saved and persisted.

## Folder Structure

```
├── public
├── src
│   ├── components
│   │   ├── PersonalDetails.tsx
│   │   ├── TechnicalSkills.tsx
│   │   ├── Employments.tsx
│   │   ├── Certificates.tsx
│   │   ├── Educations.tsx
│   │   └── ...
│   ├── lib
│   │   ├── features
│   │   │   ├── resume
│   │   │   │   ├── personalDetailsSlice.ts
│   │   │   │   ├── technicalSkillsSlice.ts
│   │   │   │   ├── employmentsSlice.ts
│   │   │   │   ├── certificatesSlice.ts
│   │   │   │   ├── educationsSlice.ts
│   │   │   │   └── sectionOrderSlice.ts
│   │   ├── hooks
│   │   ├── schema
│   │   ├── store.ts
│   │   └── utils.ts
│   ├── pages
│   │   ├── index.tsx
│   │   └── ...
│   └── styles
│       └── globals.css
├──

tailwind.config.js


├──

package.json


└──

README.md


```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

```

```
