import { Hackathon } from "../types";
export const MOCK_HACKATHONS: Record<string, Hackathon> = {
    "hack-2024-spring": {
      id: "hack-2024-spring",
      name: "Spring Innovation Hackathon 2024",
      metrics: {
        totalTeams: 115,
        totalParticipants: 460,
        averageTeamSize: 4,
        startDate: "2024-11-20",
        endDate: "2024-11-22",
        registrationOpen: true,
        prizePools: 10000
      },
      tracks: [
        { name: 'AI/ML', participants: 45 },
        { name: 'Web3', participants: 38 },
        { name: 'FinTech', participants: 32 },
      ],
      topParticipants: [
        { id: 1, name: "Sarah Chen", resumeScore: 95, track: "AI/ML", university: "MIT", email: "sarah.c@mit.edu", githubUrl: "github.com/sarahc" },
        { id: 2, name: "John Smith", resumeScore: 92, track: "Web3", university: "Stanford", email: "john.s@stanford.edu", githubUrl: "github.com/johnsmith" },
        // ... add more participants
      ],
      organizer: {
        name: "Tech Innovation Lab",
        email: "organize@techinnovation.com"
      }
    },
    "hack-2024-summer": {
      id: "hack-2024-summer",
      name: "Summer Code Festival 2024",
      metrics: {
        totalTeams: 85,
        totalParticipants: 340,
        averageTeamSize: 4,
        startDate: "2024-07-15",
        endDate: "2024-07-17",
        registrationOpen: false,
        prizePools: 15000
      },
      tracks: [
        { name: 'GameDev', participants: 40 },
        { name: 'IoT', participants: 25 },
        { name: 'Cybersecurity', participants: 20 },
      ],
      topParticipants: [
        { id: 1, name: "Emma Wilson", resumeScore: 98, track: "GameDev", university: "UCLA", email: "emma.w@ucla.edu", githubUrl: "github.com/emmaw" },
        { id: 2, name: "Alex Kumar", resumeScore: 96, track: "Cybersecurity", university: "CMU", email: "alex.k@cmu.edu", githubUrl: "github.com/alexk" },
        // ... add more participants
      ],
      organizer: {
        name: "Summer Code Organization",
        email: "organize@summercode.com"
      }
    }
  };
  