import {
  BookOpen,
  ChartLine,
  Chat,
  Folder,
  Gear,
  House,
  IdentificationCard,
  Kanban,
  Queue,
  SignOut,
  User,
  UsersThree,
} from "phosphor-react";
import ThemeToggler from "@/components/Header/ThemeToggler";
import Link from "next/link";
import { useUser } from "@/state/user";

/* eslint-disable @next/next/no-img-element */

const menus = [
  { icon: House, title: "Home", path: "/app" },
  { icon: BookOpen, title: "Courses", path: "/app/courses" },
  { icon: Kanban, title: "Projects", path: "/app/projects" },
  { icon: Chat, title: "Community", path: "/app/community" },
  { icon: User, title: "Mentors", path: "/app/mentors" },
  { icon: Folder, title: "Resources", path: "/app/ressources" },
  { icon: ChartLine, title: "Progress", path: "/app/progress" },
  { icon: Gear, title: "Settings", path: "/app/settings" },
];

export default function SidebarContent() {
  const identity = useUser();
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start gap-4 bg-dashboard-panel text-white">
      <div className="flex w-full flex-row items-center justify-start gap-2 p-4">
        <img src="/images/logo/logo.svg" className="h-10" />
        <h1 className="text-md font-heading font-bold dark:text-white">
          CodeSanctum
        </h1>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2 px-4">
        {menus.map((menu) => {
          return (
            <Link
              key={menu.path}
              href={menu.path}
              className="flex w-full cursor-pointer flex-row items-center justify-start gap-2 rounded px-4 py-3 transition-all duration-150 hover:bg-primary"
            >
              <menu.icon fill="#f9f9f9" fontSize="20px" />
              <span className="text-sm">{menu.title}</span>
            </Link>
          );
        })}
        <button
          onClick={() => identity.logout()}
          className="flex w-full cursor-pointer flex-row items-center justify-start gap-2 rounded px-4 py-3 transition-all duration-150 hover:bg-primary"
        >
          <SignOut />
          <span className="text-sm">Log out</span>
        </button>
      </div>
      <div className="flex w-full flex-row items-center justify-start gap-2 p-2">
        <ThemeToggler />
      </div>
    </div>
  );
}
