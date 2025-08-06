"use server";

import { generateSeoDescription, type GenerateSeoDescriptionInput, type GenerateSeoDescriptionOutput } from "@/ai/flows/generate-seo-description";
import { z } from "zod";

const inputSchema = z.object({
  assetName: z.string().min(1, "Asset name is required."),
  assetType: z.string().min(1, "Asset type is required."),
  assetDescription: z.string().min(10, "Description must be at least 10 characters."),
  keywords: z.string().min(1, "Keywords are required."),
});

export async function handleGenerateSeoDescription(
  input: GenerateSeoDescriptionInput
): Promise<GenerateSeoDescriptionOutput> {
  const parsedInput = inputSchema.safeParse(input);

  if (!parsedInput.success) {
    throw new Error(parsedInput.error.errors.map((e) => e.message).join(", "));
  }

  try {
    const result = await generateSeoDescription(parsedInput.data);
    return result;
  } catch (error) {
    console.error("Error generating SEO description:", error);
    throw new Error("Failed to generate SEO description. Please try again.");
  }
}
