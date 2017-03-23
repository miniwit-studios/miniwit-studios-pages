import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GithubService } from 'services';

@Component({
    selector: 'repo-list',
    styleUrls: ['./repo-list.scss'],
    templateUrl: './repo-list.html',
})
export class RepoListComponent implements OnInit {
    constructor(public github: GithubService, private route: ActivatedRoute) {
    }
    
    org: string;
    repos: Observable<any>;
    
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.org = params['org'];
            if (this.org) this.repos = this.github.getReposForOrg(this.org);
        });
    }
}
