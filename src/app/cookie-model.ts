export class Cookie {
  size: number;
  type: string;
  shape: string;
  id: number;

  constructor(cookieSize: number, cookieShape: string, cookieType: string, id: number) {
    this.size = cookieSize;
    this.shape = cookieShape;
    this.type = cookieType;
    this.id = id;
  }
}
