export function GET() {
    const tickets = [
    {
    "id": "t-1023",
    "title": "Cannot connect to VPN",
    "description": "User reports intermittent VPN connectivity errors.",
    "priority": "High",        // Low | Medium | High | Critical
    "status": "Open",          // Open | In Progress | On Hold | Resolved
    "assignee": "Unassigned",  // string
    "updatedAt": "2025-10-31T14:05:00Z"
    },
    {
        "id": "t-1024",
        "title": "Locked out of Outlook",
        "description": "User reports they cannot access email.",
        "priority": "Medium",
        "status": "In Progress",
        "assignee": "Olivia",
        "updatedAt": "2025-11-5T5:14EST"
    },
    {
        "id": "t-1025",
        "title": "Printer offline",
        "description": "Office printer shows offline status.",
        "priority": "Low",
        "status": "In Open",
        "assignee": "James",
        "updatedAt": "2025-11-5T5:16EST"
    },
    {
        "id": "t-1026",
        "title": "Software installation request",
        "description": "User requests installation of Adobe Express.",
        "priority": "Low",
        "status": "On Hold",
        "assignee": "Unassigned",
        "updatedAt": "2025-11-5T5:17EST"
    },
    {
        "id": "t-1027",
        "title": "Laptop overheating",
        "description": "Laptop temperatures overheats during video calls.",
        "priority": "High",
        "status": "Open",
        "assignee": "Unassigned",
        "updatedAt": "2025-11-5T5:18EST"
    },
    {
        "id": "t-1028",
        "title": "Access denied to shared folder",
        "description": "User unable to access Payroll shared folder.",
        "priority": "Medium",
        "status": "Resolved",
        "assignee": "Ava",
        "updatedAt": "2025-11-5T5:19EST"
    },
    {
        "id": "t-1029",
        "title": "Wi-Fi issues",
        "description": "Frequent disconnections from office Wi-Fi.",
        "priority": "High",
        "status": "In Progress",
        "assignee": "Lisa",
        "updatedAt": "2025-11-5T5:20EST"
    },
    {
        "id": "t-1030",
        "title": "Monitor glitching",
        "description": "User reports screen glitching intermittently.",
        "priority": "Medium",
        "status": "Open",
        "assignee": "Unassigned",
        "updatedAt": "2025-11-5T5:22EST"
    },
    {
        "id": "t-1031",
        "title": "Monitor glitching",
        "description": "User reports screen glitching intermittently.",
        "priority": "Medium",
        "status": "Open",
        "assignee": "Unassigned",
        "updatedAt": "2025-11-5T5:22EST"
    },
    {
        "id": "t-1032",
        "title": "Password reset request",
        "description": "User forgot passwork and needs reset.",
        "priority": "Low",
        "status": "Resolved",
        "assignee": "Nate",
        "updatedAt": "2025-11-5T5:23EST"
    },
    {
        "id": "t-1033",
        "title": "Security alert: suspicious login",
        "description": "Unusual login detected from overseas IP.",
        "priority": "Critical",
        "status": "Open",
        "assignee": "Unassigned",
        "updatedAt": "2025-11-5T5:24EST"
    },
    {
        "id": "t-1034",
        "title": "Broken keyboard",
        "description": "Spacebar and enter keys not working.",
        "priority": "Medium",
        "status": "On Hold",
        "assignee": "Dylan",
        "updatedAt": "2025-11-5T5:25EST"
    },
    {
        "id": "t-1035",
        "title": "New user onboarding",
        "description": "Setup required for new employee workstation.",
        "priority": "Medium",
        "status": "In Progress",
        "assignee": "Tate",
        "updatedAt": "2025-11-5T5:25EST"
    },
    {
        "id": "t-1036",
        "title": "Antivirus expired",
        "description": "User reports expired antivirus license.",
        "priority": "High",
        "status": "Open",
        "assignee": "Unassigned",
        "updatedAt": "2025-11-5T5:26EST"
    },
    {
        "id": "t-1037",
        "title": "Video conferencing lag",
        "description": "Zoom calls are lagging and dropping audio.",
        "priority": "High",
        "status": "In Progress",
        "assignee": "Sally",
        "updatedAt": "2025-11-5T5:27EST"
    },
    ];
    return Response.json(tickets);
}