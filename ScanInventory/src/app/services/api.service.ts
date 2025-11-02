import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest, map, tap, catchError, of } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private localAdds$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '?_limit=10');
  }

  products$(): Observable<Product[]> {
    return combineLatest([this.getProducts(), this.localAdds$]).pipe(
      map(([remote, local]) => [...local, ...remote])
    );
  }

  addProduct(product: { title: string; body: string }): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      tap((created) => {
        const id = created?.id ?? Date.now();
        const newItem: Product = { id, title: product.title, body: product.body };
        this.localAdds$.next([newItem, ...this.localAdds$.value]);
      }),
      catchError(() => {
        const fallback: Product = { id: Date.now(), title: product.title, body: product.body };
        this.localAdds$.next([fallback, ...this.localAdds$.value]);
        return of(fallback);
      })
    );
  }

  deleteProduct(id: number): Observable<any> {
    this.localAdds$.next(this.localAdds$.value.filter((p) => p.id !== id));
    return this.http.delete(this.apiUrl + '/' + id).pipe(
      catchError((err) => of({ ok: false, error: err }))
    );
  }
}
