import { Component } from "@angular/core";
import { ServicesService } from "../Services/services.service";

@Component({
    selector: '<book>',
    template: "<h1>Book</h1>"
})
export class BooksComponent{
    info: any;

    constructor(private service: ServicesService){}

    noOnInit(){
        this.service.getbooks().subscribe(
            data => {
                this.info = data;
            }
        )
    }
}