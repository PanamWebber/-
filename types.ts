export interface Location {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface ArtWork {
  id: string;
  title: string;
  studentName: string;
  locationId: string;
  description: string;
  imageUrl: string;
  category: 'Ceramic' | 'Wood' | 'Metal' | 'Digital' | 'Mixed';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
