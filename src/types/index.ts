export interface Work {
  title: string;
  description: string;
  tags: string[];
  imageBgColor: string;
  imageUrl: string;
  imageClassName?: string;
  logoUrl?: string;
  logoClassName?: string;
  hasParticles?: boolean;
  linkTo?: string;
}
