import {
  Activity,
  AlertTriangle,
  Boxes,
  CalendarDays,
  Database,
  FolderGit2,
  LayoutDashboard,
  Link2,
  Logs,
  Network,
  Settings,
  Shield,
  Variable,
  Workflow,
} from "lucide-react";

import type { DrawerView } from "@/store/drawer.store";

export interface NavigationItem {
  id: string;

  title: string;

  icon: any;

  badge?: number;

  drawer?: DrawerView;
}

export interface NavigationSection {
  title: string;

  items: NavigationItem[];
}

export const navigation: NavigationSection[] = [
  {
    title: "Navigation",

    items: [
      {
        id: "overview",
        title: "Overview",
        icon: LayoutDashboard,
      },

      {
        id: "workflow",
        title: "Workflows",
        icon: Workflow,
        drawer: "workflow",
      },

      {
        id: "execution",
        title: "Executions",
        icon: Activity,
        drawer: "execution",
      },

      {
        id: "schedule",
        title: "Schedules",
        icon: CalendarDays,
        drawer: "schedule",
      },

      {
        id: "task",
        title: "Tasks",
        icon: Boxes,
      },

      {
        id: "connection",
        title: "Connections",
        icon: Link2,
        drawer: "connection",
      },

      {
        id: "variable",
        title: "Variables",
        icon: Variable,
      },

      {
        id: "secret",
        title: "Secrets",
        icon: Shield,
      },
    ],
  },

  {
    title: "Observability",

    items: [
      {
        id: "dashboard",
        title: "Dashboard",
        icon: LayoutDashboard,
      },

      {
        id: "logs",
        title: "Logs",
        icon: Logs,
      },

      {
        id: "metrics",
        title: "Metrics",
        icon: Activity,
      },

      {
        id: "alerts",
        title: "Alerts",
        icon: AlertTriangle,
        badge: 2,
      },
    ],
  },

  {
    title: "Infrastructure",

    items: [
      {
        id: "workers",
        title: "Workers",
        icon: Database,
      },

      {
        id: "pools",
        title: "Pools",
        icon: Network,
      },

      {
        id: "deployments",
        title: "Deployments",
        icon: FolderGit2,
      },
    ],
  },

  {
    title: "Settings",

    items: [
      {
        id: "settings",
        title: "Settings",
        icon: Settings,
      },
    ],
  },
];