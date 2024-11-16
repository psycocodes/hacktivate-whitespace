"use client"
import React, { useState } from 'react';
import { Calendar, Users, Trophy, Clock, ArrowRight, Search, Plus, Edit2, Trash2, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Hackathon {
  id: string;
  name: string;
  status: HackathonStatus;
  image: string;
  date: string;
  registrations: number;
  prize: number;
  duration: number;
  description: string;
  tags: string[];
  submissions: number;
  mentors: number;
}

type HackathonStatus = 'Draft' | 'Active' | 'Ended';

interface HackathonCardProps {
  hackathon: Hackathon;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ hackathon, onEdit, onDelete }) => (
  <Card className="group hover:shadow-lg transition-all duration-300">
    <CardHeader className="space-y-2">
      <div className="flex justify-between items-start gap-2">
        <div className="space-y-1">
          <CardTitle className="text-lg sm:text-xl font-bold line-clamp-1">{hackathon.name}</CardTitle>
          <CardDescription className="line-clamp-1">ID: {hackathon.id}</CardDescription>
        </div>
        <Badge 
          variant={
            hackathon.status === 'Active' ? 'default' : 
            hackathon.status === 'Draft' ? 'secondary' : 
            'destructive'
          }
          className="w-fit"
        >
          {hackathon.status}
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <img 
          src={hackathon.image} 
          alt={hackathon.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm">{hackathon.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-sm">{hackathon.registrations} registered</span>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-gray-500" />
          <span className="text-sm">${hackathon.prize.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm">{hackathon.duration}h</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-sm font-medium">Submissions</div>
          <div className="text-2xl font-bold">{hackathon.submissions}</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-sm font-medium">Mentors</div>
          <div className="text-2xl font-bold">{hackathon.mentors}</div>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {hackathon.tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
        ))}
      </div>
      <div className="flex gap-2 justify-end w-full">
  <Button 
    variant="outline" 
    size="sm" 
    className="flex"
    onClick={() => onEdit(hackathon.id)}
  >
    <Edit2 className="w-4 h-4" />
  </Button>
  <Button 
    variant="outline" 
    size="sm" 
    className="flex"
    onClick={() => onDelete(hackathon.id)}
  >
    <Trash2 className="w-4 h-4" />
  </Button>
  <Button 
    size="sm" 
    className="flex"
  >
    <Settings className="w-4 h-4" />
  </Button>
</div>
    </CardFooter>
  </Card>
);

const OrganizerDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('all');

  const hackathons: Hackathon[] = [
    {
      id: "HACK-001",
      name: "AI Innovation Challenge",
      status: "Active",
      image: "/api/placeholder/800/400",
      date: "Apr 20-22, 2024",
      registrations: 150,
      prize: 50000,
      duration: 48,
      description: "Build the next big thing in AI",
      tags: ["AI", "ML", "Cloud"],
      submissions: 45,
      mentors: 12
    },
    {
      id: "HACK-002",
      name: "Web3 Builders Hackathon",
      status: "Draft",
      image: "/api/placeholder/800/400",
      date: "May 15-16, 2024",
      registrations: 0,
      prize: 25000,
      duration: 36,
      description: "Create the future of Web3",
      tags: ["Blockchain", "DeFi", "NFT"],
      submissions: 0,
      mentors: 8
    },
    {
      id: "HACK-003",
      name: "Mobile Dev Challenge",
      status: "Ended",
      image: "/api/placeholder/800/400",
      date: "Mar 10-12, 2024",
      registrations: 200,
      prize: 30000,
      duration: 48,
      description: "Mobile innovation challenge",
      tags: ["Mobile", "iOS", "Android"],
      submissions: 75,
      mentors: 15
    },
  ];

  const handleEdit = (id: string) => {
    console.log(`Editing hackathon ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting hackathon ${id}`);
  };

  const filteredHackathons = (status: string) => {
    return hackathons.filter(hackathon => {
      const matchesSearch = hackathon.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = status === 'all' || hackathon.status === status;
      return matchesSearch && matchesStatus;
    });
  };

  return (
    <div className="container mx-auto py-10 space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Organizer Dashboard</h1>
          <p className="text-gray-500">Manage your hackathons and events</p>
        </div>
        <Button size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Create Hackathon
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Hackathons", value: "12" },
          { label: "Active Events", value: "3" },
          { label: "Total Participants", value: "1,234" },
          { label: "Total Prize Pool", value: "$105,000" }
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle>{stat.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input
            placeholder="Search hackathons..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="ai">AI & ML</SelectItem>
            <SelectItem value="web3">Web3</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="all" className="space-y-6" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Active">Active</TabsTrigger>
          <TabsTrigger value="Draft">Draft</TabsTrigger>
          <TabsTrigger value="Ended">Ended</TabsTrigger>
        </TabsList>

        {["all", "Active", "Draft", "Ended"].map((status) => (
          <TabsContent key={status} value={status}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHackathons(status).map((hackathon, index) => (
                <HackathonCard 
                  key={index} 
                  hackathon={hackathon}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default OrganizerDashboard;