"use client";
import StatusHandler from "@/components/UI/applications/StatusHandler";
import { useFetchApplication } from "@/hooks/useFetchApplications";

const AdminPage = ({ params: { slug } }) => {
  const { application, loading, error } = useFetchApplication(slug);

  const renderEntries = (data) => {
    return Object.entries(data).map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return (
          <div key={key} className="mb-2">
            <h5 className="font-bold">{camelToTitle(key)}</h5>
            <div className="ml-4">{renderEntries(value)}</div>
          </div>
        );
      }
      return (
        <div key={camelToTitle(key)} className="mb-2">
          <span className="font-bold">{camelToTitle(key)}:</span> {value}
        </div>
      );
    });
  };

  const camelToTitle = (camelCase) => {
    return camelCase
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/Id/g, "ID")
      .replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  if (loading || error)
    return <StatusHandler loading={loading} error={error} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">
        Admin Dashboard - Applications
      </h1>
      <h3 className="mb-2 text-xl font-bold">Application Form</h3>

      <h3 className="mb-2 text-xl font-bold">Application DetailsForm</h3>
      <div>{renderEntries(application)}</div>
    </div>
  );
};

export default AdminPage;
