export interface PersonalDetails {
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
    id: "01",
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

export const INITIAL_TECHNICAL_SKILLS: TechnicalSkill[] = [
  {
    id: "JavaScript",
    skill: "JavaScript",
    level: "Expert",
  },
  {
    id: "React",
    skill: "React",
    level: "Advanced",
  },
];

export const INITIAL_EMPLOYMENTS: Employment[] = [
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
];

export const INITIAL_CERTIFICATES: Certificate[] = [
  {
    id: "1",
    title: "Certified JavaScript Developer",
    date: "2019-06-01",
  },
];

export const INITIAL_EDUCATIONS: Education[] = [
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
];

export const INITIAL_SECTIONS_ORDER: SectionOrder[] = [
  {
    id: "31",
    type: "personalDetails",
  },
  {
    id: "32",
    type: "technicalSkills",
  },
  {
    id: "33",
    type: "employments",
  },
  {
    id: "34",
    type: "certificates",
  },
  {
    id: "35",
    type: "educations",
  },
];
