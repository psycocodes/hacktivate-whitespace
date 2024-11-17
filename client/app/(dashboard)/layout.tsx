"use client";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconWorldCode,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from '@/components/ui/badge';


export default function DashboardPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userProfile = {
    name: "John Doe",
    username: "@john-doe",
    email: "john.doe@example.com",
    type: "Participant",
    resumeScore: 70,
    github: "github.com/john-doe",
    linkedin: "linkedin.com/in/john-doe",
    hackathons: [
      {
        name: "Global Hackathon",
        position: "3rd Place",
        project: "InnovateX",
        date: "February 2023"
      },
      {
        name: "TechFest",
        position: "Finalist",
        project: "Smart Home App",
        date: "December 2022"
      }
    ]
  };
  const links = [
    {
      label: "Hackathons",
      href: "/hackathons",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/api/auth/logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-full " // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-2 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <SidebarLink
              link={{
                label: "Agnij Dutta",
                href: "/profile",
                icon: (
                  <Image
                    src="/images/agnij-pfp.jpg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            >

            </SidebarLink>
            {open && userProfile.type === "Organiser" ? (
              <Badge variant="default" className=" h-4 w-[85px]">
                Organiser
              </Badge>
            ) : open ? (
              <Badge variant="default" className="h-4 w-[85px]">
                Participant
              </Badge>
            ) : null}
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src="/images/logo.png" width={25} height={25} alt="Logo" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Hackativate
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src="/images/logo.png" width={25} height={25} alt="Logo" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <section className="grid no-scrollbar overflow-y-auto">
          {children}
        </section>
      </div>
    </div>
  );
};

