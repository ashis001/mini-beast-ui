'use client';

import { useState, useTransition } from 'react';
import { ArrowRight, Loader2, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { getLearningPathSuggestions } from '@/lib/actions';
import type { LearningPath } from '@/lib/types';
import { Badge } from '../ui/badge';

const interestsList = [
  { id: 'apm', label: 'APM & Observability' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'devops', label: 'DevOps & SRE' },
  { id: 'k8s', label: 'Kubernetes' },
  { id: 'logs', label: 'Log Management' },
  { id: 'ai', label: 'AI/ML Applications' },
  { id: 'security', label: 'Security' },
];

type PersonalizedPathsProps = {
  userName: string;
};

export default function PersonalizedPaths({ userName }: PersonalizedPathsProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleInterestChange = (interestLabel: string, checked: boolean) => {
    setSelectedInterests(prev =>
      checked
        ? [...prev, interestLabel]
        : prev.filter(item => item !== interestLabel)
    );
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const paths = await getLearningPathSuggestions(selectedInterests);
      setLearningPaths(paths);
    });
  };

  if (learningPaths.length > 0) {
    return (
      <div className="animate-fade-in space-y-4">
        <div className="text-center">
            <h2 className="text-2xl font-bold">Recommended For You, {userName}</h2>
            <p className="text-muted-foreground">Based on your interests, here are some learning paths to get you started.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {learningPaths.map((path, index) => (
            <Card
              key={path.id}
              className="flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{path.title.includes("AI") ? "New" : path.title.includes("Kuber") ? "Popular" : "Core"}</Badge>
                <CardTitle>{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild variant="default" className="w-full">
                  <a href={path.link} target="_blank" rel="noopener noreferrer">
                    Start Learning <ArrowRight />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
            <Button variant="link" onClick={() => {
                setLearningPaths([]);
                setSelectedInterests([]);
            }}>
                Or, explore other paths
            </Button>
        </div>
      </div>
    );
  }

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Personalize Your Journey</CardTitle>
        <CardDescription>
          Hi {userName}, tell us what you're interested in to get personalized
          learning paths.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {interestsList.map(interest => (
            <div key={interest.id} className="flex items-center space-x-2">
              <Checkbox
                id={interest.id}
                onCheckedChange={checked =>
                  handleInterestChange(interest.label, !!checked)
                }
              />
              <Label htmlFor={interest.id} className="font-normal">
                {interest.label}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSubmit}
          disabled={isPending || selectedInterests.length === 0}
          className="w-full"
        >
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Wand2 />
          )}
          {isPending ? 'Generating...' : 'Generate Paths'}
        </Button>
      </CardFooter>
    </Card>
  );
}
