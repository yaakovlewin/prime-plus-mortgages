import { z } from "zod";

// Helper schemas
const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(?!0+\s+,?$)\d{10}\s*,?$/;
const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;
const currencyRegex = /^\d+(\.\d{1,2})?$/;
const nationalInsuranceNumberRegex =
  /^[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D\s]$/i;
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

const addressSchema = z.object({
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  locality: z.string().optional(),
  city: z.string().min(1, "City is required"),
  postcode: z.string().regex(postcodeRegex, "Invalid postcode format"),
});

const applicantSchema = z.object({
  title: z.enum(["Mr", "Mrs", "Miss", "Ms", "Dr"]),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
    MaritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"]),
  dateOfBirth: z.string().regex(dateRegex, "Invalid date format"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(phoneRegex, "Invalid phone number"),
  address: addressSchema,
  employmentStatus: z.enum([
    "Employed",
    "Self-Employed",
    "Unemployed",
    "Retired",
  ]),
  occupation: z.string().min(1, "Occupation is required"),
  employerName: z.string().min(1, "Employer name is required"),
  annualIncome: z.number().positive("Annual income must be positive"),
  nationalInsuranceNumber: z
    .string()
    .regex(nationalInsuranceNumberRegex, "Invalid NI number"),
});

// Main application schema (general fields)
const generalMortgageSchema = z.object({
  applicants: z
    .array(applicantSchema)
    .min(1, "At least one applicant is required"),
  loanDetails: z.object({
    loanAmount: z.number().positive("Loan amount must be positive"),
    loanTerm: z.number().int().positive("Loan term must be a positive integer"),
    interestRate: z.number().min(0, "Interest rate cannot be negative"),
    repaymentType: z.enum(["Repayment", "Interest Only"]),
  }),
  propertyDetails: z.object({
    propertyValue: z.number().positive("Property value must be positive"),
    propertyType: z.enum(["House", "Flat", "Bungalow", "Maisonette"]),
    propertyAddress: addressSchema,
    numberOfBedrooms: z
      .number()
      .int()
      .positive("Number of bedrooms must be positive"),
  }),
  additionalNotes: z.string().optional(),
});

// Specific schemas for different mortgage types
const firstTimeBuyerSchema = z.object({
  mortgageType: z.literal("FirstTimeBuyer"),
  isFirstTimeBuyer: z
    .boolean()
    .refine((val) => val === true, "Must be a first-time buyer"),
  depositAmount: z.number().positive("Deposit amount must be positive"),
});

const remortgageSchema = z.object({
  mortgageType: z.literal("Remortgage"),
  currentMortgageDetails: z.object({
    currentMortgageProvider: z
      .string()
      .min(1, "Current mortgage provider is required"),
    outstandingBalance: z
      .number()
      .positive("Outstanding balance must be positive"),
    currentInterestRate: z
      .number()
      .min(0, "Current interest rate cannot be negative"),
    earlyRepaymentCharge: z
      .number()
      .min(0, "Early repayment charge cannot be negative"),
  }),
  reasonForRemortgage: z.enum([
    "Better Rate",
    "Home Improvements",
    "Debt Consolidation",
    "Other",
  ]),
});

const buyToLetSchema = z.object({
  mortgageType: z.literal("BuyToLet"),
  rentalDetails: z.object({
    expectedRentalIncome: z
      .number()
      .positive("Expected rental income must be positive"),
    existingProperties: z
      .number()
      .int()
      .min(0, "Number of existing properties must be non-negative"),
  }),
  isFirstTimeLandlord: z.boolean(),
});

const homeMoverSchema = z.object({
  mortgageType: z.literal("HomeMover"),
  currentPropertyDetails: z.object({
    currentPropertyValue: z
      .number()
      .positive("Current property value must be positive"),
    outstandingMortgage: z
      .number()
      .min(0, "Outstanding mortgage cannot be negative"),
  }),
});

// Function to get the appropriate schema based on mortgage type
const getSchemaByMortgageType = (mortgageType) => {
  let specificSchema;
  switch (mortgageType) {
    case "FirstTimeBuyer":
      specificSchema = firstTimeBuyerSchema;
      break;
    case "Remortgage":
      specificSchema = remortgageSchema;
      break;
    case "BuyToLet":
      specificSchema = buyToLetSchema;
      break;
    case "HomeMover":
      specificSchema = homeMoverSchema;
      break;
    default:
      throw new Error(`Unknown mortgage type: ${mortgageType}`);
  }

  // Merge the general schema with the specific schema
  return generalMortgageSchema.merge(specificSchema);
};

export {
  buyToLetSchema,
  firstTimeBuyerSchema,
  generalMortgageSchema,
  getSchemaByMortgageType,
  homeMoverSchema,
  remortgageSchema,
};
