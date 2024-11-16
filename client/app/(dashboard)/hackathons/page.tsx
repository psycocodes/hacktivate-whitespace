
import HackathonOrgs from "@/components/ui/hackathons-organiser"
import HackathonDashboard from "@/components/ui/hackathons-participant"

const HackathonPage = () => {
  const session = {
    user: {
      role: "organiser", // or "participant"
    },
  }

  if (!session) return <div>You need to be logged in to view this page</div>

  const { user } = session
  const { role } = user

  if (role === "organiser") {
    return <HackathonOrgs />
  } else if (role === "participant") {
    return <HackathonDashboard />
  }

  return <div>You need to be either an organiser or a participant to view this page</div>
}

export default HackathonPage

