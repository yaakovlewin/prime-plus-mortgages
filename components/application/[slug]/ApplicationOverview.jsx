import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ApplicationOverview = ({ application }) => (
  <Alert className="mb-6 border-cyan-200 bg-cyan-50">
    <AlertTitle className="text-cyan-800">
      Application ID: {application.id}
    </AlertTitle>
    <AlertDescription>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <span className="font-semibold">Form Type:</span>{" "}
          {application.formType}
        </div>
        <div>
          <span className="font-semibold">Status:</span> {application.status}
        </div>
        <div>
          <span className="font-semibold">Submitted by:</span>{" "}
          {application.name}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {application.email}
        </div>
        <div className="col-span-2">
          <span className="font-semibold">Submitted on:</span>{" "}
          {new Date(application.submittedAt).toLocaleString()}
        </div>
      </div>
    </AlertDescription>
  </Alert>
);

export default ApplicationOverview;
