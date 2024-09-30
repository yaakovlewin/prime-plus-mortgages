import { z } from "zod";

// Helper schemas
const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(?!0+\s+,?$)\d{10}\s*,?$/;
const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;
const nationalInsuranceNumberRegex =
  /^[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D\s]$/i;

const addressSchema = z.object({
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  locality: z.string().optional(),
  townCity: z.string().min(1, "Town/City is required"),
  county: z.string().optional(),
  postcode: z.string().regex(postcodeRegex, "Invalid postcode format"),
});

const personalDetailsSchema = z.object({
  Title: z.enum(["Mr", "Mrs", "Miss", "Ms", "Dr"]),
  Gender: z.enum(["Male", "Female", "Other"]),
  FirstName: z.string().min(1, "First name is required"),
  LastName: z.string().min(1, "Last name is required"),
  MaritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"]),
  DateOfBirth: z.string().min(1, "Date of birth is required"),
  Nationality: z.string().min(1, "Nationality is required"),
  PlaceOfBirth: z.string().min(1, "Place of birth is required"),
  ContactNumber: z.string().regex(phoneRegex, "Invalid phone number"),
  Email: z.string().email("Invalid email address"),
  NationalInsuranceNumber: z
    .string()
    .regex(nationalInsuranceNumberRegex, "Invalid NI number"),
  CurrentAddress: addressSchema,
  YearsAtAddress: z.number().min(0, "Years at address must be 0 or greater"),
  PreviousAddress: addressSchema.optional(),
});

const employmentDetailsSchema = z.object({
  EmploymentStatus: z.enum(["Employed", "Self-Employed"]),
  JobTitle: z.string().min(1, "Job title is required"),
  EmployerName: z.string().min(1, "Employer's name is required"),
  EmployerAddress: z.string().min(1, "Employer's address is required"),
  EmployerContactNumber: z.string().regex(phoneRegex, "Invalid phone number"),
  AnnualGrossIncome: z
    .number()
    .positive("Annual gross income must be positive"),
  StartDateOfEmployment: z
    .string()
    .min(1, "Start date of employment is required"),
  PreviousEmployerName: z.string().optional(),
  OutstandingLoans: z.string().optional(),
});

const financialDetailsSchema = z.object({
  ResidenceStatus: z.enum(["Homeowner", "Tenant"]),
  HomeownerDetails: z.string().optional(),
  TenantDetails: z.string().optional(),
  DateMovedIn: z.string().min(1, "Date moved in is required"),
  PreviousAddress: z.string().optional(),
  PreviousDateMovedIn: z.string().optional(),
  DirectorShareholder: z.string().optional(),
});

const propertyDetailsSchema = z.object({
  PropertyAddress: z.string().min(1, "Property address is required"),
  Postcode: z.string().regex(postcodeRegex, "Invalid postcode format"),
  PropertyType: z.enum([
    "Detached",
    "Semi-Detached",
    "Terraced",
    "Flat",
    "Bungalow",
    "Other",
  ]),
  PropertyValue: z.number().positive("Property value must be positive"),
  RentalIncome: z.number().optional(),
  LoanAmountRequired: z
    .number()
    .positive("Loan amount required must be positive"),
  AddFeesToLoan: z.boolean(),
  SourceOfDeposit: z.string().optional(),
  NameOfVendor: z.string().optional(),
  TermOfMortgage: z
    .number()
    .int()
    .positive("Term of mortgage must be a positive integer"),
  YearOfBuild: z.string().min(1, "Year of build is required"),
  InitialRatePeriod: z.string().min(1, "Initial rate period is required"),
  FixedOtherDetails: z.string().optional(),
  DetailsOfSolicitor: z.string().min(1, "Details of solicitor are required"),
  ContactForValuationName: z
    .string()
    .min(1, "Contact name for valuation is required"),
  ContactForValuationNumber: z
    .string()
    .regex(phoneRegex, "Invalid phone number"),
  ContactForValuationEmail: z.string().email("Invalid email address"),
  PropertyConstruction: z.enum(["Standard", "Other"]),
  DirectDebitAccountName: z
    .string()
    .min(1, "Direct debit account name is required"),
  DirectDebitAccountNumber: z
    .string()
    .min(1, "Direct debit account number is required"),
  DirectDebitSortCode: z.string().min(1, "Direct debit sort code is required"),
  DetailsOfProperty: z.string().min(1, "Details of property are required"),
  PropertyTenure: z.enum(["Leasehold", "Freehold"]),
  Judgements: z.enum(["Yes", "No"]),
  PaymentDifficulties: z.enum(["Yes", "No"]),
});

const portfolioDetailsSchema = z.object({
  NumberOfPropertiesOwned: z
    .number()
    .int()
    .min(0, "Number of properties must be 0 or greater"),
  TotalValueOfProperties: z
    .number()
    .positive("Total value of properties must be positive"),
  TotalMortgageOutstanding: z
    .number()
    .min(0, "Total mortgage outstanding must be 0 or greater"),
  TotalMonthlyMortgagePayments: z
    .number()
    .positive("Total monthly mortgage payments must be positive"),
  TotalMonthlyRentalIncome: z
    .number()
    .positive("Total monthly rental income must be positive"),
});

const companyDetailsSchema = z.object({
  CompanyName: z.string().min(1, "Company name is required"),
  RegistrationNumber: z.string().min(1, "Registration number is required"),
  IncorporationDate: z.string().min(1, "Incorporation date is required"),
  address: addressSchema,
  AddCorrespondenceAddress: z.boolean(),
  correspondentAddress: addressSchema.optional(),
});

// Application schemas
const buyToLetSchema = z.object({
  formType: z.literal("buy-to-let"),
  companyDetails: companyDetailsSchema,
  applicants: z
    .array(
      z.object({
        personalDetails: personalDetailsSchema,
        financialDetails: financialDetailsSchema,
      }),
    )
    .min(1, "At least one applicant is required"),
  propertyDetails: propertyDetailsSchema,
  portfolioDetails: portfolioDetailsSchema,
});

const remortgageSchema = z.object({
  formType: z.literal("remortgage"),
  applicants: z
    .array(
      z.object({
        personalDetails: personalDetailsSchema,
        employmentDetails: employmentDetailsSchema,
        financialDetails: financialDetailsSchema,
      }),
    )
    .min(1, "At least one applicant is required"),
});

const firstTimeBuyerSchema = z.object({
  formType: z.literal("first-time-buyer"),
  applicants: z
    .array(
      z.object({
        personalDetails: personalDetailsSchema,
        employmentDetails: employmentDetailsSchema,
        financialDetails: financialDetailsSchema,
      }),
    )
    .min(1, "At least one applicant is required"),
});

// Combine all application schemas
const applicationSchema = z.discriminatedUnion("formType", [
  buyToLetSchema,
  remortgageSchema,
  firstTimeBuyerSchema,
]);

export default applicationSchema;
