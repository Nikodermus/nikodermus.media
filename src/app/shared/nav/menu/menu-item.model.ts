export class MenuItem {
  public name: string;
  public path: string;
  public quotes: Array<object>;
  public images: Array<string>;

  constructor(
    name: string,
    path: string,
    quotes: Array<object>,
    images: Array<string>) {
    this.name = name;
    this.path = path;
    this.quotes = quotes;
    this.images = images;
  }
}
