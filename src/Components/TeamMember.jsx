import Image from "next/image";

export default function TeamMember() {
  const teamMembers = [
    {
      name: "Fardin Rahman Sojon",
      title: "Frontend Developer",
      img: "https://i.ibb.co/Dxr4tHj/fardin.jpg",
    },
    {
      name: "Refat Hasan",
      title: "Backend Developer",
      img: "https://i.ibb.co/35cjGSK2/rifat-2.jpg",
    },
    {
      name: "Rifat Hasan",
      title: "UI/UX Designer",
      img: "https://i.ibb.co/G4s41tQL/rifat.jpg",
    },
  ];

  return (
    <section className="px-8 text-center">
      <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-6 border-2 border-blue-500  rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
