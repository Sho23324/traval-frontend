import {
    Calendar,
    Home,
    Hotel,
    House,
    Inbox,
    LogOut,
    MapPin,
    Search,
    Settings,
    Utensils,
    Wallet,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-10">
                        <a
                            href="#"
                            className="text-3xl font-bold text-green-400"
                        >
                            Travel-Trax
                        </a>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a className="py-5" href="/dashboard">
                                        <House />
                                        <span className="font-bold pl-1">
                                            Home
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a className="py-5" href="/destinations">
                                        <MapPin />
                                        <span className="font-bold pl-1">
                                            Destinations
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a className="py-5" href="/hotels">
                                        <Hotel />
                                        <span className="font-bold pl-1">
                                            Hotels
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a className="py-5" href="/restaurants">
                                        <Utensils />
                                        <span className="font-bold pl-1">
                                            Restaurants
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a className="py-5" href="/restaurants">
                                        <Wallet />
                                        <span className="font-bold pl-1">
                                            Budget
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a className="py-5" href="/destinations">
                                        <LogOut />
                                        <span className="font-bold pl-1">
                                            Logout
                                        </span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
