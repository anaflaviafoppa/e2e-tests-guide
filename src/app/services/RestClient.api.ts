import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  })
};

export abstract class RestClientApi {

  protected constructor(
    protected http: HttpClient
  ) {
  }
  protected post<R>(url: string, body: object = {}, options: object = {}): Promise<R> {
    // @ts-ignore
    return this.http.post<R>(url, body, this.mergeOptions(options)).toPromise();
  }

  protected put<R>(url: string, body: object, options: object = {}): Promise<R> {
    // @ts-ignore
    return this.http.put<R>(url, body, this.mergeOptions(options)).toPromise();
  }

  protected patch<R>(url: string, body: object, options: object = {}): Promise<R> {
    // @ts-ignore
    return this.http.patch<R>(url, body, this.mergeOptions(options)).toPromise();
  }

  protected delete<R>(url: string): Promise<R> {
    // @ts-ignore
    return this.http.delete<R>(url).toPromise();
  }

  protected get<R>(url: string, queryParams?: object, options: object = {}): Promise<R | undefined> {
    return this.http.get<R>(url + this.buildQueryString(queryParams), this.mergeOptions(options)).toPromise();
  }

  private mergeOptions(options: any): object {
    let  headers = httpOptions.headers;
    if (options.headers) {
      _.forEach(options.headers, (value, key) => {
        headers = headers.append(key, value);
      });
    }
    return {...httpOptions, ...options,  headers};
  }

  protected buildQueryString(paramsMap: any = {}): string {
    const queryString = Object.keys(this.removeInvalidValues(paramsMap))
      .map(key => `${key}=${paramsMap[key]}`)
      .join('&');
    return queryString.length === 0 ? '' : `?${queryString}`;
  }

  protected removeInvalidValues(obj: object = {}): object {
    return _.chain(obj).omitBy(_.isNil).omitBy((value: any) => value === '').value();
  }
}
