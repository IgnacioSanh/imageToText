type BoundingBox = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
export interface ImageProcessorResponse {
  bounding_box: BoundingBox;
  text: string;
}
