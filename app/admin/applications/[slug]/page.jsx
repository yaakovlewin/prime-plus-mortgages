"use client";
import ApplicantDetailsComponent from "@/components/application/[slug]/ApplicantDetailsComponent";
import FieldComponent from "@/components/application/[slug]/FieldComponent";
import NestedFieldsComponent from "@/components/application/[slug]/NestedFieldsComponent";
import SectionComponent from "@/components/application/[slug]/SectionComponent";
import { Alert, AlertDescription, AlertTitle } from "@/components/UI/alert";
import StatusHandler from "@/components/UI/applications/StatusHandler";
import { useFetchApplication } from "@/hooks/useFetchApplications";
import { CalendarDays, Clipboard, Info } from "lucide-react";
import { useState } from "react";

const AdminPage = ({ params: { slug } }) => {
  const { application, loading, error } = useFetchApplication(slug);
  const [copiedField, setCopiedField] = useState(null);

  if (loading || error) {
    return <StatusHandler loading={loading} error={error} />;
  }

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const excludeKeys = [
    "id",
    "name",
    "email",
    "status",
    "submittedAt",
    "formType",
    "applicants",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Application Details</h1>
      <Alert className="mb-6">
        <AlertTitle>Application ID: {slug}</AlertTitle>
        <AlertDescription>
          <div>Form Type: {application.formType}</div>
          <div>
            Submitted by: {application.name} ({application.email})
          </div>
          <div>
            Submitted on:{" "}
            {new Date(application.submittedAt).toLocaleDateString()}
          </div>
          <div>Status: {application.status}</div>
        </AlertDescription>
      </Alert>

      <SectionComponent
        title="Application Overview"
        content={
          <>
            <FieldComponent
              label="Application Type"
              value={application.formType}
              icon={<Clipboard />}
              field="form-type"
            />
            <FieldComponent
              label="Submission Date"
              value={application.submittedAt}
              icon={<CalendarDays />}
              field="submission-date"
            />
            <FieldComponent
              label="Status"
              value={application.status}
              icon={<Info />}
              field="status"
            />
          </>
        }
      />

      {application.applicants && application.applicants.length > 0 && (
        <SectionComponent
          title="Applicant Information"
          content={
            <ApplicantDetailsComponent
              applicants={application.applicants}
              copiedField={copiedField}
              copyToClipboard={copyToClipboard}
            />
          }
        />
      )}

      {Object.entries(application).map(([key, value]) => {
        if (!excludeKeys.includes(key) && typeof value === "object") {
          return (
            <SectionComponent
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              content={
                <NestedFieldsComponent
                  data={value}
                  prefix={key}
                  copiedField={copiedField}
                  copyToClipboard={copyToClipboard}
                />
              }
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default AdminPage;
