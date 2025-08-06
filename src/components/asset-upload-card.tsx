"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadCloud, File, Link as LinkIcon, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadedFile {
  name: string;
  url: string;
}

export function AssetUploadCard() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;
    if (newFiles) {
      const uploaded = Array.from(newFiles).map((file) => ({
        name: file.name,
        url: `https://stsh.re/${Math.random().toString(36).substr(2, 9)}`,
      }));
      setFiles((prev) => [...prev, ...uploaded]);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: "The URL has been copied to your clipboard.",
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Upload Assets</CardTitle>
        <CardDescription>Drag and drop your files or click to browse.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative border-2 border-dashed border-muted-foreground/50 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors">
          <UploadCloud className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-2">Drag & drop files here</p>
          <p className="text-xs text-muted-foreground mb-4">or</p>
          <Button variant="outline" size="sm" asChild>
            <label htmlFor="file-upload">
              Browse Files
              <Input id="file-upload" type="file" multiple className="sr-only" onChange={handleFileUpload} />
            </label>
          </Button>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="font-medium text-sm">Uploaded Files</h4>
            <div className="rounded-md border max-h-48 overflow-y-auto">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 border-b last:border-b-0">
                  <div className="flex items-center gap-3">
                    <File className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium truncate">{file.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                      <LinkIcon className="w-3 h-3"/>
                      {file.url}
                    </a>
                    <Button variant="ghost" size="icon" className="w-7 h-7" onClick={() => copyToClipboard(file.url)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
