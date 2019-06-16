import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {Blog} from '../model/blog';
import {Response} from '../model/response';

import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
    providedIn: 'root'
})

export class BlogService {
    private url = 'http://crud.local/api/blog';

    constructor(
        private http: HttpClient
    ) { }

    getBlogs(): Observable<Response> {
        return this.http
            .get<Response>(this.url)
            .pipe(
                tap(_ => this.log('fetched blogs')),

                catchError(this.handleError<Response>('getBlogs'))
            );
    }

    getBlog(id): Observable<Response> {
        const url = `${this.url}/${id}`;
        return this.http
            .get<Response>(url)
            .pipe(
                tap(_ => this.log(`fetched blog id=${id}`)),
                catchError(this.handleError<Response>(`getBlog id=${id}`))
            );
    }

    addBlog(blog: Blog): Observable<Response> {
        return this.http
            .post<Response>(this.url, blog, httpOptions)
            .pipe(
                tap((res: Response) => this.log(`added blog w/ id=${res.blog.id}`)),
                catchError(this.handleError<Response>('addBlog'))
            );
    }

    updateBlog(blog: Blog): Observable<Response> {
        const url = `${this.url}/${blog.id}`
        return this.http
            .put<Response>(url, blog, httpOptions)
            .pipe(
                tap(_ => this.log(`updated blog id=${blog.id}`)),
                catchError(this.handleError<Response>(`updateBlog id=${blog.id}`))
            );
    }

    deleteBlog(id): Observable<Response> {
        const url = `${this.url}/${id}`
        return this.http
            .delete<Response>(url)
            .pipe(
                tap(_ => this.log(`delete blog id=${id}`)),
                catchError(this.handleError<Response>(`deleteBlog id=${id}`))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        // this.messageService.add(`HeroService: ${message}`);
    }
}
