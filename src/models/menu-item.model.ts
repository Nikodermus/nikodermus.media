import { Quote } from './quote.model';

export class MenuItem {
  public name: string;
  public path: string;
  public quotes: Array<Quote>;
  public images: Array<string>;

  constructor(
    name: string,
    path: string,
    quotes: Array<Quote>,
    images: Array<string>) {
    this.name = name;
    this.path = path;
    this.quotes = quotes;
    this.images = images;
  }
}
