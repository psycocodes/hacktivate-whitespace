"use client"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, Trophy, Code, Calendar, DollarSign } from "lucide-react";
import { notFound } from "next/navigation";
import { Hackathon } from "@/types/index";
import { MOCK_HACKATHONS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


export default function HackathonDashboard({
  params,
}: {
  params: { id: string };
}) {
  // In a real app, you'd fetch this data from an API
  const hackathon: Hackathon | undefined = MOCK_HACKATHONS[params.id];

  if (!hackathon) {
    notFound();
  }

  const { metrics, tracks, topParticipants, name } = hackathon;
  const hackathonData = MOCK_HACKATHONS["hack-2024-spring"];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  var userRole = "participant";
  if (userRole === "participant") {
    return     <div className="min-h-screen p-8 pt-2">
    {/* Hero Section */}
    <div className="max-w-6xl mx-auto mb-8">
      <h1 className="text-4xl font-bold mb-4">{hackathonData.name}</h1>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <Calendar className="h-5 w-5" />
        <span>{formatDate(hackathonData.metrics.startDate)} - {formatDate(hackathonData.metrics.endDate)}</span>
      </div>
      
      {hackathonData.metrics.registrationOpen && (
        <Alert className="mb-6 ">
          <AlertTitle>Registration is Open!</AlertTitle>
          <AlertDescription>
            Join {hackathonData.metrics.totalParticipants} participants in this exciting event.
          </AlertDescription>
        </Alert>
      )}
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Total Teams</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{hackathonData.metrics.totalTeams}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Participants</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{hackathonData.metrics.totalParticipants}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prize Pool</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">${hackathonData.metrics.prizePools.toLocaleString()}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Size</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{hackathonData.metrics.averageTeamSize} people</p>
        </CardContent>
      </Card>
    </div>

    {/* Registration Dialog */}
    <div className="max-w-6xl mx-auto">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="w-full md:w-auto">
            Register Now
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register for {hackathonData.name}</DialogTitle>
            <DialogDescription>
              Fill out the form below to register your team for the hackathon.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your team name" />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Team Leader Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter team leader's email" />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Number of Team Members</FormLabel>
              <FormControl>
                <Input type="number" min="1" max="5" placeholder="Enter team size" />
              </FormControl>
              <FormDescription>Teams can have up to 5 members</FormDescription>
            </FormItem>
            <Button className="w-full mt-4">Submit Registration</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </div>

  }
  else {
    return <div className="p-6 space-y-6 max-w-7xl mx-auto">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold mb-6">{name}</h1>
      <div className="text-sm text-gray-500">
        {metrics.registrationOpen ? (
          <span className="text-green-500 font-medium">
            Registration Open
          </span>
        ) : (
          <span className="text-red-500 font-medium">
            Registration Closed
          </span>
        )}
      </div>
    </div>

    {/* Key Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium">Total Teams</p>
              <h3 className="text-2xl font-bold">{metrics.totalTeams}</h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Participants</p>
              <h3 className="text-2xl font-bold">
                {metrics.totalParticipants}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <Code className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium">Avg Team Size</p>
              <h3 className="text-2xl font-bold">
                {metrics.averageTeamSize}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <Calendar className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm font-medium">Event Dates</p>
              <h3 className="text-sm font-bold">
                {new Date(metrics.startDate).toLocaleDateString()} -
                {new Date(metrics.endDate).toLocaleDateString()}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <DollarSign className="h-8 w-8 text-emerald-500" />
            <div>
              <p className="text-sm font-medium">Prize Pool</p>
              <h3 className="text-2xl font-bold">
                ${metrics.prizePools.toLocaleString()}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Track Distribution Chart */}
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Participants by Track</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={tracks}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="participants" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>

    {/* Top Participants Table */}
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Top Participants by Resume Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Rank</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">University</th>
                <th className="text-left p-4">Track</th>
                <th className="text-left p-4">Resume Score</th>
                <th className="text-left p-4">Links</th>
              </tr>
            </thead>
            <tbody>
              {topParticipants.map((participant, index) => (
                <tr
                  key={participant.id}
                  className="border-b hover:bg-gray-950 cursor-pointer"
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 font-medium">{participant.name}</td>
                  <td className="p-4">{participant.university}</td>
                  <td className="p-4">{participant.track}</td>
                  <td className="p-4">{participant.resumeScore}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:${participant.email}`}
                        className="text-blue-500 hover:text-blue-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Email
                      </a>
                      <a
                        href={`https://${participant.githubUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
};
};          