import { videos, type Video, type InsertVideo } from "@shared/schema";

export interface IStorage {
  getVideos(): Promise<Video[]>;
  getVideo(id: number): Promise<Video | undefined>;
}

export class MemStorage implements IStorage {
  private videos: Map<number, Video>;

  constructor() {
    this.videos = new Map();
    // Add one mock video just in case the frontend tries to load it
    this.videos.set(1, {
      id: 1,
      title: "MARABUNTA GRANDE",
      description: "A cinematic showcase of the Marabunta Grande territory inspired by GTA V.",
      url: "/mock-url",
      featured: true,
      createdAt: new Date(),
    });
  }

  async getVideos(): Promise<Video[]> {
    return Array.from(this.videos.values());
  }

  async getVideo(id: number): Promise<Video | undefined> {
    return this.videos.get(id);
  }
}

export const storage = new MemStorage();
