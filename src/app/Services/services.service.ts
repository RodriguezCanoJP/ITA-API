import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicesService{
    constructor(private httpclient: HttpClient){}

    getbooks(): Observable<any>{
        return this.httpclient.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kYfQWtOOA0NIY4OcSLtk5kiYos4htK5d")
    }
}