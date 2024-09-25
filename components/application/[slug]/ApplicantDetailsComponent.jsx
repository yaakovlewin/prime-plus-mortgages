import NestedFieldsComponent from "./NestedFieldsComponent";
import SectionComponent from "./SectionComponent";

const ApplicantDetailsComponent = ({
  applicants,
  copiedField,
  copyToClipboard,
}) => {
  const renderApplicantDetails = (applicant, index) => (
    <div key={index} className="mb-6">
      <h4 className="mb-2 text-lg font-semibold">Applicant {index + 1}</h4>
      {Object.entries(applicant).map(([sectionKey, sectionData]) => (
        <SectionComponent
          key={sectionKey}
          title={sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
          content={
            <NestedFieldsComponent
              data={sectionData}
              prefix={`applicant-${index}-${sectionKey}`}
              copiedField={copiedField}
              copyToClipboard={copyToClipboard}
            />
          }
        />
      ))}
    </div>
  );

  return (
    <>
      {applicants.map((applicant, index) =>
        renderApplicantDetails(applicant, index),
      )}
    </>
  );
};

export default ApplicantDetailsComponent;
