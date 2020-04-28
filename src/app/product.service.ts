import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	constructor(private http: HttpClient) {}
	postdata(val): Observable<any> {
		return this.http.post('https://ajith-url-shortener.herokuapp.com/', val);
	}
	getdata(): Observable<any> {
		return this.http.get('https://ajith-url-shortener.herokuapp.com/url');
	}
}
