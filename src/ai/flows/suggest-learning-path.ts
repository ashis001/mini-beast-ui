'use server';

/**
 * @fileOverview AI agent that suggests learning paths based on user interests.
 *
 * - suggestLearningPath - A function that generates learning path suggestions.
 * - SuggestLearningPathInput - The input type for the suggestLearningPath function.
 * - SuggestLearningPathOutput - The return type for the suggestLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestLearningPathInputSchema = z.object({
  developerInterests: z
    .string()
    .describe('A comma separated list of developer interests.'),
});
export type SuggestLearningPathInput = z.infer<typeof SuggestLearningPathInputSchema>;

const SuggestLearningPathOutputSchema = z.object({
  suggestedPaths: z
    .string()
    .describe(
      'A comma separated list of learning path suggestions based on the users interests.'
    ),
});
export type SuggestLearningPathOutput = z.infer<typeof SuggestLearningPathOutputSchema>;

export async function suggestLearningPath(
  input: SuggestLearningPathInput
): Promise<SuggestLearningPathOutput> {
  return suggestLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestLearningPathPrompt',
  input: {schema: SuggestLearningPathInputSchema},
  output: {schema: SuggestLearningPathOutputSchema},
  prompt: `You are a learning path suggestion expert for New Relic.

Based on the user's interests, suggest a few learning paths that would be relevant to them.

Interests: {{{developerInterests}}}

Suggestions:`,
});

const suggestLearningPathFlow = ai.defineFlow(
  {
    name: 'suggestLearningPathFlow',
    inputSchema: SuggestLearningPathInputSchema,
    outputSchema: SuggestLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
