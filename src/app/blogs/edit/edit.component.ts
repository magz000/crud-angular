import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BlogService} from '../../service/blog.service';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Blog} from '../../model/blog';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class BlogEditComponent implements OnInit {
    blog: Blog = new Blog;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.getBlog();
    }

    getBlog(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.blogService.getBlog(id)
            .subscribe(res => {
                this.blog = res.blog;
            });
    }

    updateBlog(): void {
        this.blogService.updateBlog(this.blog)
            .subscribe(res => {
                console.log(res);
                this.router.navigate(['/'])
            });
    }

    goBack(): void {
        this.location.back();
    }

}
