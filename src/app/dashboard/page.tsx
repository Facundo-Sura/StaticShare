import { AssetUploadCard } from "@/components/asset-upload-card";
import { DashboardHeader } from "@/components/dashboard-header";
import { EndpointSubmissionCard } from "@/components/endpoint-submission-card";
import { SeoGeneratorCard } from "@/components/seo-generator-card";
import { UsageTrackingCard } from "@/components/usage-tracking-card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-1 p-4 md:p-8">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2">
            <AssetUploadCard />
          </div>
          <UsageTrackingCard />
          <div className="lg:col-span-2">
            <SeoGeneratorCard />
          </div>
          <EndpointSubmissionCard />
        </div>
      </main>
    </div>
  );
}
