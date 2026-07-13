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

export interface NavigationItem {
  title: string;
  icon: any;
  active?: boolean;
  badge?: number;
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
        title: "Overview",
        icon: LayoutDashboard,
      },
      {
        title: "Workflows",
        icon: Workflow,
        active: true,
      },
      {
        title: "Executions",
        icon: Activity,
      },
      {
        title: "Schedules",
        icon: CalendarDays,
      },
      {
        title: "Tasks",
        icon: Boxes,
      },
      {
        title: "Connections",
        icon: Link2,
      },
      {
        title: "Variables",
        icon: Variable,
      },
      {
        title: "Secrets",
        icon: Shield,
      },
    ],
  },

  {
    title: "Observability",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Logs",
        icon: Logs,
      },
      {
        title: "Metrics",
        icon: Activity,
      },
      {
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
        title: "Workers",
        icon: Database,
      },
      {
        title: "Pools",
        icon: Network,
      },
      {
        title: "Deployments",
        icon: FolderGit2,
      },
    ],
  },

  {
    title: "Settings",
    items: [
      {
        title: "Settings",
        icon: Settings,
      },
    ],
  },
];