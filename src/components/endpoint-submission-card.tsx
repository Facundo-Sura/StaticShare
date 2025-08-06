"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link as LinkIcon, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Endpoint {
  id: string;
  url: string;
}

export function EndpointSubmissionCard() {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([]);
  const [newEndpoint, setNewEndpoint] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEndpoint.trim() === "") return;
    try {
      new URL(newEndpoint);
      setEndpoints((prev) => [
        ...prev,
        { id: Math.random().toString(36).substr(2, 9), url: newEndpoint },
      ]);
      setNewEndpoint("");
      toast({
        title: "Endpoint Added",
        description: "Your new endpoint is now active.",
      });
    } catch (_) {
      toast({
        variant: "destructive",
        title: "Invalid URL",
        description: "Please enter a valid URL for your endpoint.",
      });
    }
  };

  const removeEndpoint = (id: string) => {
    setEndpoints(endpoints.filter(ep => ep.id !== id));
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Manage Endpoints</CardTitle>
        <CardDescription>Add and manage your static back-end endpoints.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="url"
            placeholder="https://api.example.com/data"
            value={newEndpoint}
            onChange={(e) => setNewEndpoint(e.target.value)}
          />
          <Button type="submit">Add</Button>
        </form>

        <div className="mt-6 space-y-3">
          <h4 className="font-medium text-sm">Active Endpoints</h4>
          <div className="rounded-md border max-h-48 overflow-y-auto">
            {endpoints.length > 0 ? (
              endpoints.map((endpoint) => (
                <div key={endpoint.id} className="flex items-center justify-between p-3 border-b last:border-b-0">
                  <div className="flex items-center gap-3">
                    <LinkIcon className="w-5 h-5 text-muted-foreground" />
                    <a href={endpoint.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium truncate hover:underline">{endpoint.url}</a>
                  </div>
                   <Button variant="ghost" size="icon" className="w-7 h-7" onClick={() => removeEndpoint(endpoint.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                </div>
              ))
            ) : (
              <p className="p-4 text-sm text-muted-foreground text-center">No endpoints added yet.</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
