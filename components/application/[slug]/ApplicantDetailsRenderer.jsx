import RenderNestedFields from "./NestedFieldsRenderer";
import SectionRenderer from "./SectionRenderer";

const ApplicantDetails = ({ applicant, index }) => (
  <div className="mb-6 rounded-lg bg-gray-50 p-4">
    <h4 className="mb-2 text-lg font-semibold text-cyan-600">
      Applicant {index + 1}
    </h4>
    {Object.entries(applicant).map(([sectionKey, sectionData]) => (
      <SectionRenderer
        key={sectionKey}
        title={sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
      >
        <RenderNestedFields
          data={sectionData}
          prefix={`applicant-${index}-${sectionKey}`}
        />
      </SectionRenderer>
    ))}
  </div>
);

export default ApplicantDetails;
