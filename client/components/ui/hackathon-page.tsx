import React from 'react';
import { Github, Linkedin, Mail, Download, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfilePage = () => {
  const userProfile = {
    name: "Sarah Johnson",
    username: "@sarahcodes",
    email: "sarah.johnson@email.com",
    resumeScore: 85,
    github: "github.com/sarahcodes",
    linkedin: "linkedin.com/in/sarahjohnson",
    hackathons: [
      {
        name: "TechHacks 2024",
        position: "1st Place",
        project: "AI-Powered Health Tracker",
        date: "March 2024"
      },
      {
        name: "Global Code Jam",
        position: "2nd Place",
        project: "Sustainable Energy Dashboard",
        date: "January 2024"
      },
      {
        name: "HackForGood",
        position: "Best UI/UX",
        project: "Community Aid Platform",
        date: "November 2023"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/api/placeholder/150/150" alt="Profile picture" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{userProfile.name}</h1>
            <p className="text-gray-500">{userProfile.username}</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>

      {/* Contact and Links */}
      <Card>
        <CardHeader>
          <CardTitle>Contact & Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>{userProfile.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Github className="h-4 w-4" />
            <a href={`https://${userProfile.github}`} className="text-blue-600 hover:underline">
              {userProfile.github}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="h-4 w-4" />
            <a href={`https://${userProfile.linkedin}`} className="text-blue-600 hover:underline">
              {userProfile.linkedin}
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Resume Score */}
      <Card>
        <CardHeader>
          <CardTitle>Resume Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Overall Score</span>
              <span className="font-bold">{userProfile.resumeScore}%</span>
            </div>
            <Progress value={userProfile.resumeScore} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Hackathons */}
      <Card>
        <CardHeader>
          <CardTitle>Hackathon Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userProfile.hackathons.map((hackathon, index) => (
              <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <h3 className="font-semibold">{hackathon.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{hackathon.project}</p>
                  <p className="text-sm text-gray-500">{hackathon.date}</p>
                </div>
                <Badge variant="secondary">{hackathon.position}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;