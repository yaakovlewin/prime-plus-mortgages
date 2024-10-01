"use client";
import ApplicantDetails from "@/components/application/[slug]/ApplicantDetailsRenderer";
import ApplicationOverview from "@/components/application/[slug]/ApplicationOverview";
import NestedFieldRenderer from "@/components/application/[slug]/NestedFieldsRenderer";
import SectionRenderer from "@/components/application/[slug]/SectionRenderer";
import StatusHandler from "@/components/UI/applications/StatusHandler";
import { useFetchApplication } from "@/hooks/useFetchApplications";

const AdminPage = ({ params: { slug } }) => {
  const { application, loading, error } = useFetchApplication(slug);

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

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
        <ApplicationOverview application={application} />

        {application.applicants && application.applicants.length > 0 && (
          <SectionRenderer title="Applicant Information">
            {application.applicants.map((applicant, index) => (
              <ApplicantDetails
                key={index}
                applicant={applicant}
                index={index}
              />
            ))}
          </SectionRenderer>
        )}

        {Object.entries(application).map(([key, value]) => {
          if (!excludeKeys.includes(key) && typeof value === "object") {
            return (
              <SectionRenderer
                key={key}
                title={key.charAt(0).toUpperCase() + key.slice(1)}
              >
                <NestedFieldRenderer data={value} prefix={key} />
              </SectionRenderer>
            );
          }
          return null;
        })}
      </>
    );
  };

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Application Details
      </h1>
      {renderApplicationDetails()}
    </div>
  );
};

export default AdminPage;
