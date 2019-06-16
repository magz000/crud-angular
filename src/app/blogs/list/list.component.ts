import {Component, OnInit} from '@angular/core';

import {Blog} from '../../model/blog';
import {BlogService} from '../../service/blog.service';

@Component({
    selector: 'app-blogs-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class BlogListComponent implements OnInit {
    blogs: Blog[];

    constructor(private blogService: BlogService) { }

    ngOnInit() {
        this.getBlogs();

    }

    getBlogs(): void {
        this.blogService.getBlogs().subscribe(res => this.blogs = res.blogs );
    }

    deleteBlog(id): void {
        this.blogService.deleteBlog(id).subscribe(res => {
            console.log(res);
            this.getBlogs();
        });
    }

}
