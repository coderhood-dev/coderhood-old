import { fetch } from '../../lib';
import { GetRoadmapsResponse, GetRoadmapResponse } from './types';

export * from './types';

export const getRoadmaps = () => {
  return fetch<GetRoadmapsResponse>(
    `${process.env.NEXT_PUBLIC_BASE_URL}roadmaps`
  );
};

export const getRoadmap = (name: string) => {
  return fetch<GetRoadmapResponse>(
    `${process.env.NEXT_PUBLIC_BASE_URL}roadmaps/${name}`
  );
};
