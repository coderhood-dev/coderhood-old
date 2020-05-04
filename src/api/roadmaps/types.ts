interface Minimum {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Subject extends Minimum {
  name: string;
  title: string;
  description: string;
  roadmap: string;
  image_url: string;
}

interface Roadmap extends Minimum {
  name: string;
  title: string;
  description: string;
}

export type GetRoadmapsResponse = Roadmap[];

export interface GetRoadmapResponse extends Roadmap {
  subjects: Subject[];
}
