"use client"

import {
  Atom,
  Bird,
  BookOpen,
  Bot,
  Code2,
  Eclipse,
  Frame,
  History,
  LifeBuoy,
  Map,
  PieChart,
  Rabbit,
  Send,
  Settings2,
  SquareTerminal,
  Star,
  Turtle,
  Calendar,
  Users,
  MapPin,
  Clipboard,
  DollarSign,
  Clock,
  Mail,
  Building,
  Utensils,
  Music,
  Camera,
  Truck,
  Settings,
  HelpCircle,
  MessageSquare,
} from "lucide-react"

import { NavMain } from "~/components/nav-main"
import { NavProjects } from "~/components/nav-projects"
import { NavSecondary } from "~/components/nav-secondary"
import { NavUser } from "~/components/nav-user"
import { StorageCard } from "~/components/storage-card"
import { TeamSwitcher } from "~/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "~/components/ui/sidebar"

const data = {
  teams: [
    {
      name: "Event Planners Inc",
      logo: Calendar,
      plan: "Enterprise",
    },
    {
      name: "Wedding Wizards",
      logo: Users,
      plan: "Startup",
    },
    {
      name: "Corporate Events Co.",
      logo: Building,
      plan: "Free",
    },
  ],
  user: {
    name: "John Doe",
    email: "john@eventplanner.com",
    avatar: "/avatars/john-doe.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Clipboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
          icon: Calendar,
          description: "View your upcoming events",
        },
        {
          title: "Guest List",
          url: "#",
          icon: Users,
          description: "Manage event attendees",
        },
        {
          title: "Venues",
          url: "#",
          icon: MapPin,
          description: "Browse and select event locations",
        },
      ],
    },
    {
      title: "Planning Tools",
      url: "#",
      icon: Clock,
      items: [
        {
          title: "Budget Tracker",
          url: "#",
          icon: DollarSign,
          description: "Manage your event finances",
        },
        {
          title: "Schedule",
          url: "#",
          icon: Clock,
          description: "Plan your event timeline",
        },
        {
          title: "Invitations",
          url: "#",
          icon: Mail,
          description: "Create and send event invitations",
        },
      ],
    },
    {
      title: "Vendors",
      url: "#",
      icon: Truck,
      items: [
        {
          title: "Catering",
          url: "#",
          icon: Utensils,
        },
        {
          title: "Entertainment",
          url: "#",
          icon: Music,
        },
        {
          title: "Photography",
          url: "#",
          icon: Camera,
        },
        {
          title: "Decorations",
          url: "#",
          icon: MapPin,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Account",
          url: "#",
        },
        {
          title: "Preferences",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Integrations",
          url: "#",
        },
      ],
    },
  ],

  navSecondary: [
    {
      title: "Help Center",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Contact Support",
      url: "#",
      icon: MessageSquare,
    },
  ],
  projects: [
    {
      name: "Summer Conference 2024",
      url: "#",
      icon: Building,
    },
    {
      name: "Smith-Johnson Wedding",
      url: "#",
      icon: Users,
    },
    {
      name: "Annual Corporate Retreat",
      url: "#",
      icon: MapPin,
    },
  ],
  searchResults: [
    {
      title: "Routing Fundamentals",
      teaser:
        "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.",
      url: "#",
    },
    {
      title: "Layouts and Templates",
      teaser:
        "The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.",
      url: "#",
    },
    {
      title: "Data Fetching, Caching, and Revalidating",
      teaser:
        "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.",
      url: "#",
    },
    {
      title: "Server and Client Composition Patterns",
      teaser:
        "When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ",
      url: "#",
    },
    {
      title: "Server Actions and Mutations",
      teaser:
        "Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.",
      url: "#",
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="mt-10">
      <SidebarItem>
          <SidebarLabel>Teams</SidebarLabel>
          <TeamSwitcher teams={data.teams} />
        </SidebarItem>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={data.navMain} searchResults={data.searchResults} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Projects</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem>
     
        <SidebarItem className="mt-auto">
          <SidebarLabel>Help</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
        <SidebarItem>
          <StorageCard />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
