import Banner from "@/Components/Banner";
import Features from "@/Components/Features";
import TeamMember from "@/Components/TeamMember";

export default function Home() {
  return (
    <div className="h-full font-sans">
      <main className="container mx-auto space-y-8">
        <Banner/>
        <Features/>
        <TeamMember/>
      </main>
    </div>
  );
}
