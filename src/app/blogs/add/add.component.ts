import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../service/blog.service';
import { Router} from '@angular/router';

import {Location} from '@angular/common';

import {Blog} from '../../model/blog';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})

export class BlogAddComponent implements OnInit {
    blog: Blog = new Blog;

    constructor(
        private blogService: BlogService,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit() {
    }


    addBlog(): void {
        console.log(this.blog)
        this.blogService.addBlog(this.blog)
            .subscribe(res => {
                console.log(res);
                this.router.navigate(['/'])
            });
    }

    goBack(): void {
        this.location.back();
    }



}
