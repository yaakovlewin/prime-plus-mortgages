import Image from "next/image";

const MeetTheTeamSection = ({ teamMembers }) => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Meet the Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="text-center">
                            <Image
                                src={member.photoUrl}
                                alt={member.name}
                                width={200}
                                height={200}
                                className="w-32 h-32 rounded-full mx-auto"
                            />
                            <h3 className="mt-4 font-semibold">
                                {member.name}
                            </h3>
                            <p className="text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetTheTeamSection;
