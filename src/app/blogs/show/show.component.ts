import {Component, OnInit} from '@angular/core';

import {BlogService} from '../../service/blog.service';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Blog} from '../../model/blog';

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class BlogShowComponent implements OnInit {
    blog: Blog;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private location: Location
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

    goBack(): void {
        this.location.back();
    }

}
