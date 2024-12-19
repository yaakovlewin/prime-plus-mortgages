import DashboardContent from "@/components/admin/DashboardContent";
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: "Admin Dashboard | Prime Plus Mortgages",
  description: "Admin dashboard for Prime Plus Mortgages staff.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Admin Dashboard | Prime Plus Mortgages",
    description: "Admin dashboard for Prime Plus Mortgages staff.",
  },
};

export default function AdminDashboard() {
  return <DashboardContent />;
}
