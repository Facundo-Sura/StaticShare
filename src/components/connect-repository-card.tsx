"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitBranch, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Repository {
  id: string;
  url: string;
}

export function ConnectRepositoryCard() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRepo.trim() === "") return;
    try {
      // Basic URL validation
      new URL(newRepo);
      if (!newRepo.includes("github.com") && !newRepo.includes("gitlab.com") && !newRepo.includes("bitbucket.org")) {
        throw new Error("Only GitHub, GitLab, and Bitbucket URLs are accepted.");
      }
      setRepos((prev) => [
        ...prev,
        { id: Math.random().toString(36).substr(2, 9), url: newRepo },
      ]);
      setNewRepo("");
      toast({
        title: "Repository Connected",
        description: "Your repository is now linked and ready to deploy.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Invalid Repository URL",
        description: error.message || "Please enter a valid Git repository URL.",
      });
    }
  };

  const removeRepo = (id: string) => {
    setRepos(repos.filter((repo) => repo.id !== id));
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Connect Repository</CardTitle>
        <CardDescription>
          Connect a Git repository to deploy your projects automatically.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="url"
            placeholder="https://github.com/user/repo.git"
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
          />
          <Button type="submit">Connect</Button>
        </form>

        <div className="mt-6 space-y-3">
          <h4 className="font-medium text-sm">Connected Repositories</h4>
          <div className="rounded-md border max-h-48 overflow-y-auto">
            {repos.length > 0 ? (
              repos.map((repo) => (
                <div
                  key={repo.id}
                  className="flex items-center justify-between p-3 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-muted-foreground" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium truncate hover:underline"
                    >
                      {repo.url}
                    </a>
                  </div>
                   <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Deploy</Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-7 h-7"
                      onClick={() => removeRepo(repo.id)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-4 text-sm text-muted-foreground text-center">
                No repositories connected yet.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
