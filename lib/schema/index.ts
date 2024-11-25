import { z } from "zod";

export const personalDetailsSchema = z.object({
  firstName: z
    .string()
    .min(5, { message: "First name must be at least 5 characters long" }),
  lastName: z
    .string()
    .min(5, { message: "Last name must be at least 5 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(8, { message: "Phone number must be at least 8 characters long" }),
  country: z
    .string()
    .min(5, { message: "Country must be at least 5 characters long" }),
  city: z
    .string()
    .min(5, { message: "City must be at least 5 characters long" }),
  jobTitle: z
    .string()
    .min(5, { message: "Job title must be at least 5 characters long" }),
  address: z.string().optional(),
  postalCode: z.string().optional(),
  drivingLicense: z.string().optional(),
  nationality: z.string().optional(),
  placeOfBirth: z.string().optional(),
  dateOfBirth: z.string().optional(),
  summary: z.string().optional(),
});
