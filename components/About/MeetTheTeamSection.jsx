import teamMembersData from "@/js/teamMembersData"; // Ensure the path is correct
import Image from "next/image";

const MeetTheTeamSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-cyan-600 mb-8">
                    Meet Our Team
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {teamMembersData.map((member) => (
                        <div
                            key={member.id}
                            className="text-center p-6 bg-gray-100 rounded-lg shadow"
                        >
                            <Image
                                src={member.photoUrl}
                                alt={member.name}
                                width={128}
                                height={128}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="font-semibold text-xl mb-2">
                                {member.name}
                            </h3>
                            <p className="text-cyan-600 font-semibold">
                                {member.role}
                            </p>
                            <p className="text-gray-600 mt-2">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetTheTeamSection;
