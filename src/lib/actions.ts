
'use server';

import { suggestLearningPath } from '@/ai/flows/suggest-learning-path';
import type { LearningPath } from './types';

const pathDetails: Record<string, { description: string; link: string }> = {
  'Observability Basics': {
    description: 'Understand the core concepts of observability and how to monitor your applications effectively.',
    link: '#',
  },
  'APM Fundamentals': {
    description: 'Dive deep into Application Performance Monitoring to diagnose and resolve issues faster.',
    link: '#',
  },
  'Frontend Monitoring': {
    description: 'Learn how to track and optimize the performance of your user-facing applications.',
    link: '#',
  },
  'Infrastructure Monitoring': {
    description: 'Get a complete view of your entire infrastructure, from servers to containers.',
    link: '#',
  },
  'Kubernetes Monitoring': {
    description: 'Master the art of monitoring your Kubernetes clusters and the applications running on them.',
    link: '#',
  },
  'Log Management': {
    description: 'Collect, process, and analyze logs from all your services to get deeper insights.',
    link: '#',
  },
  'AI Application Observability': {
      description: 'Gain visibility into your AI-powered applications to ensure performance and accuracy.',
      link: '#'
  },
  'Security Monitoring': {
      description: 'Detect and respond to threats across your entire stack with integrated security monitoring.',
      link: '#'
  }
};

const defaultDescription = "Explore this area to enhance your skills and build amazing applications with our platform.";
const defaultLink = "#";

export async function getLearningPathSuggestions(
  interests: string[]
): Promise<LearningPath[]> {
  if (interests.length === 0) {
    return [];
  }

  try {
    const result = await suggestLearningPath({
      developerInterests: interests.join(', '),
    });

    const paths = result.suggestedPaths.split(',').map(path => path.trim()).filter(Boolean);

    return paths.map((path, index) => {
      const details = Object.entries(pathDetails).find(([key]) => path.includes(key));
      return {
        id: `${index + 1}`,
        title: path,
        description: details ? details[1].description : defaultDescription,
        link: details ? details[1].link : defaultLink,
      };
    });
  } catch (error) {
    console.error('Error getting learning path suggestions:', error);
    return [];
  }
}
