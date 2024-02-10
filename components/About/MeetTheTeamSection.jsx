import teamMembersData from "@/js/teamMembersData"; // Ensure the path is correct
import Image from "next/image";
import Heading2 from "../Heading2";

const MeetTheTeamSection = () => {
  return (
    <section
      className="border-b border-sky-200 bg-sky-200 py-12 heropattern-topography-white"
      id="team"
    >
      <div className="container mx-auto px-4">
        <Heading2 className="mb-8 text-center text-3xl font-semibold text-cyan-600">
          Meet Our Team
        </Heading2>
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembersData.map((member) => (
            <div
              key={member.id}
              className="rounded-lg bg-gray-100 p-6 text-center shadow"
            >
              <Image
                src={member.photoUrl}
                alt={member.name}
                width={128}
                height={128}
                className="mx-auto mb-4 h-32 w-32 rounded-full"
              />
              <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
              <p className="font-semibold text-cyan-600">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
