'use server';

/**
 * @fileOverview An SEO description generator for web assets.
 *
 * - generateSeoDescription - A function that generates an SEO-friendly description for web assets.
 * - GenerateSeoDescriptionInput - The input type for the generateSeoDescription function.
 * - GenerateSeoDescriptionOutput - The return type for the generateSeoDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoDescriptionInputSchema = z.object({
  assetName: z.string().describe('The name of the web asset.'),
  assetType: z.string().describe('The type of the web asset (e.g., website, image, video).'),
  assetDescription: z.string().describe('A detailed description of the web asset.'),
  keywords: z.string().describe('Comma separated keywords related to the web asset.'),
});
export type GenerateSeoDescriptionInput = z.infer<typeof GenerateSeoDescriptionInputSchema>;

const GenerateSeoDescriptionOutputSchema = z.object({
  seoDescription: z
    .string()
    .describe('An SEO-friendly description of the web asset, up to 160 characters.'),
});
export type GenerateSeoDescriptionOutput = z.infer<typeof GenerateSeoDescriptionOutputSchema>;

export async function generateSeoDescription(
  input: GenerateSeoDescriptionInput
): Promise<GenerateSeoDescriptionOutput> {
  return generateSeoDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoDescriptionPrompt',
  input: {schema: GenerateSeoDescriptionInputSchema},
  output: {schema: GenerateSeoDescriptionOutputSchema},
  prompt: `You are an SEO expert. Generate a concise and engaging SEO description (under 160 characters) for the following web asset:

Asset Name: {{{assetName}}}
Asset Type: {{{assetType}}}
Asset Description: {{{assetDescription}}}
Keywords: {{{keywords}}}

SEO Description:`,
});

const generateSeoDescriptionFlow = ai.defineFlow(
  {
    name: 'generateSeoDescriptionFlow',
    inputSchema: GenerateSeoDescriptionInputSchema,
    outputSchema: GenerateSeoDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
