// types.ts
export interface Participant {
    id: number;
    name: string;
    resumeScore: number;
    track: string;
    university: string;
    email: string;
    githubUrl: string;
  }
  
  export interface TrackData {
    name: string;
    participants: number;
  }
  
  export interface HackathonMetrics {
    totalTeams: number;
    totalParticipants: number;
    averageTeamSize: number;
    startDate: string;
    endDate: string;
    registrationOpen: boolean;
    prizePools: number;
  }
  
  export interface Hackathon {
    id: string;
    name: string;
    metrics: HackathonMetrics;
    tracks: TrackData[];
    topParticipants: Participant[];
    organizer: {
      name: string;
      email: string;
    };
  }
  