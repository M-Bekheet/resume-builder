import { v4 as uuidv4 } from "uuid";

export interface PersonalDetails {
  sectionName: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  jobTitle: string;
  summary: string;
  additionalInfo?: {
    address?: string;
    postalCode?: string;
    drivingLicense?: string;
    nationality?: string;
    placeOfBirth?: string;
    dateOfBirth?: string;
  };
}

export interface TechnicalSkill {
  id: string;
  skill: string;
  level: "Novice" | "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface Employment {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
  currentlyWorking: boolean;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  date: string;
}

export interface Education {
  id: string;
  title: string;
  date: string;
}

export interface SectionOrder {
  id: string;
  type:
    | "personalDetails"
    | "technicalSkills"
    | "employments"
    | "certificates"
    | "educations";
}

/* INITIAL VALUES */

export const INITIAL_PERSONAL_DETAILS: PersonalDetails[] = [
  {
    sectionName: "Personal Details",
    id: "personal-details-1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    country: "USA",
    city: "New York",
    jobTitle: "Software Engineer",
    summary:
      "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
    additionalInfo: {
      address: "123 Main St",
      postalCode: "10001",
      drivingLicense: "B",
      nationality: "American",
      placeOfBirth: "New York",
      dateOfBirth: "1990-01-01",
    },
  },
];

export const INITIAL_TECHNICAL_SKILLS = [
  {
    sectionName: "Technical Skills",
    id: "technical-skills-1",
    skills: [
      {
        id: uuidv4(),
        skill: "JavaScript",
        level: "Expert",
      },
      {
        id: uuidv4(),
        skill: "React",
        level: "Advanced",
      },
    ] as TechnicalSkill[],
  },
];

export const INITIAL_EMPLOYMENTS = [
  {
    sectionName: "Employment History",
    id: "employment-1",
    employments: [
      {
        id: "11",
        jobTitle: "Software Engineer",
        company: "Tech Corp",
        startDate: "2018-01-01",
        endDate: "2020-01-01",
        currentlyWorking: false,
        description:
          "Developed and maintained web applications using JavaScript, React, and Node.js.",
      },
      {
        id: "12",
        jobTitle: "Senior Software Engineer",
        company: "Innovatech",
        startDate: "2020-02-01",
        currentlyWorking: true,
        description:
          "Leading a team of developers to build scalable web applications.",
      },
    ] as Employment[],
  },
];

export const INITIAL_CERTIFICATES = [
  {
    sectionName: "Certificates",
    id: "certificates-1",
    certificates: [
      {
        id: "1",
        title: "Certified JavaScript Developer",
        date: "2019-06-01",
      },
    ] as Certificate[],
  },
];

export const INITIAL_EDUCATIONS = [
  {
    sectionName: "Education",
    id: "education-1",
    educations: [
      {
        id: "21",
        title: "Bachelor of Science in Computer Science",
        date: "2012-05-01",
      },
      {
        id: "22",
        title: "Master of Science in Software Engineering",
        date: "2014-05-01",
      },
    ] as Education[],
  },
];

export const INITIAL_SECTIONS_ORDER: SectionOrder[] = [
  {
    id: "personal-details-1",
    type: "personalDetails",
  },
  {
    id: "technical-skills-1",
    type: "technicalSkills",
  },
  {
    id: "employment-1",
    type: "employments",
  },
  {
    id: "certificates-1",
    type: "certificates",
  },
  {
    id: "education-1",
    type: "educations",
  },
];
