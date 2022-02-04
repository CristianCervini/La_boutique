import { DefaultUrlSerializer, UrlTree } from "@angular/router";

export class CustomUrlSerializer extends DefaultUrlSerializer {
    private _reverseUrl(url: string): any {
        // console.log("url2 >> ", url);
        // const newUrl =  url
        // .replace('(', '/')
        // .replace(')', '')
        // .split('//').join('/');
        // console.log("newUrl ", newUrl);
        // return newUrl;
    }

    private _beautifyUrl(url: string): any {
        // console.log("url", url);
        // const startIndex = 1;
        // const segmentString = url.substring(startIndex).split('/').join('//');
        // console.log("segmentString", segmentString);
        // return url.substring(0, startIndex) + segmentString;
    }
    
    parse(url: string): UrlTree {
      return super.parse(this._reverseUrl(url));
    }
    serialize(tree: UrlTree): string {
      return this._beautifyUrl(super.serialize(tree));
    }
  }