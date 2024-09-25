"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/UI/alert";
import StatusHandler from "@/components/UI/applications/StatusHandler";
import { useFetchApplication } from "@/hooks/useFetchApplications";
import { Calendar, Clipboard } from "lucide-react";
import { useState } from "react";

const AdminPage = ({ params: { slug } }) => {
  const { application, loading, error } = useFetchApplication(slug);
  const [copiedField, setCopiedField] = useState(null);

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const renderField = (label, value, icon, field) => (
    <div className="mb-2 flex items-center space-x-2" key={field}>
      {icon}
      <span className="font-semibold">{label}:</span>
      <span>{value}</span>
      <button
        onClick={() => copyToClipboard(value, field)}
        className="ml-2 rounded p-1 hover:bg-gray-200"
      >
        <Clipboard size={16} />
      </button>
      {copiedField === field && (
        <span className="text-sm text-green-500">Copied!</span>
      )}
    </div>
  );

  const renderSection = (title, content) => (
    <div className="mb-6 rounded-lg bg-white p-6 shadow" key={title}>
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      {content}
    </div>
  );

  const renderNestedFields = (data, prefix = "") => {
    return Object.entries(data).map(([key, value]) => {
      const fieldId = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "object" && value !== null) {
        return (
          <div key={fieldId} className="mb-2 ml-4">
            <h4 className="font-semibold">{key}</h4>
            {renderNestedFields(value, fieldId)}
          </div>
        );
      }
      return renderField(key, value, <Clipboard />, fieldId);
    });
  };

  const renderApplicantDetails = (applicant, index) => (
    <div key={index} className="mb-6">
      <h4 className="mb-2 text-lg font-semibold">Applicant {index + 1}</h4>
      {Object.entries(applicant).map(([sectionKey, sectionData]) =>
        renderSection(
          sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1),
          renderNestedFields(sectionData, `applicant-${index}-${sectionKey}`),
        ),
      )}
    </div>
  );

  const renderApplicationDetails = () => {
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
      <>
        {renderSection(
          "Application Overview",
          <>
            {renderField(
              "Application Type",
              application.formType,
              <Clipboard />,
              "form-type",
            )}
            {renderField(
              "Submission Date",
              new Date(application.submittedAt).toLocaleString(),
              <Calendar />,
              "submission-date",
            )}
            {renderField("Status", application.status, <Clipboard />, "status")}
          </>,
        )}

        {application.applicants &&
          application.applicants.length > 0 &&
          renderSection(
            "Applicant Information",
            application.applicants.map((applicant, index) =>
              renderApplicantDetails(applicant, index),
            ),
          )}

        {Object.entries(application).map(([key, value]) => {
          if (!excludeKeys.includes(key) && typeof value === "object") {
            return renderSection(
              key.charAt(0).toUpperCase() + key.slice(1),
              renderNestedFields(value, key),
            );
          }
          return null;
        })}
      </>
    );
  };

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
            Submitted on: {new Date(application.submittedAt).toLocaleString()}
          </div>
          <div>Status: {application.status}</div>
        </AlertDescription>
      </Alert>
      {renderApplicationDetails()}
    </div>
  );
};

export default AdminPage;
