type ProjectDoc = {
  link:string;
  name:string;
}

export type ProjectData = {
    name: string;
    projectMedia: ProjectDoc[],
    fund: {
      estimatedRentability: string;
      quantityFunded: number;
    };
  };