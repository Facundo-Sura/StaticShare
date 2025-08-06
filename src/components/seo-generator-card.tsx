"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { handleGenerateSeoDescription } from "@/app/dashboard/actions";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  assetName: z.string().min(2, { message: "Asset name must be at least 2 characters." }),
  assetType: z.string().min(2, { message: "Asset type must be at least 2 characters." }),
  assetDescription: z.string().min(10, { message: "Description must be at least 10 characters." }),
  keywords: z.string().min(2, { message: "Please provide at least one keyword." }),
});

export function SeoGeneratorCard() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assetName: "",
      assetType: "",
      assetDescription: "",
      keywords: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult("");
    try {
      const response = await handleGenerateSeoDescription(values);
      setResult(response.seoDescription);
      toast({
        title: "Success!",
        description: "Your SEO description has been generated.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "An error occurred.",
        description: error.message || "Failed to generate description. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          AI SEO Assistant
        </CardTitle>
        <CardDescription>Generate SEO-friendly descriptions for your assets.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="assetName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asset Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., My Portfolio Website" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="assetType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asset Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Website, Image" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="assetDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your asset in detail..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., portfolio, web developer, react" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Description"
              )}
            </Button>
          </form>
        </Form>
        {result && (
          <div className="mt-6">
            <Label>Generated SEO Description</Label>
            <Textarea readOnly value={result} className="mt-2 min-h-[100px] bg-muted" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
