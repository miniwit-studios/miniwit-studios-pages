import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GithubService } from 'services';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './repo-list.html',
    styleUrls: ['./repo-list.scss']
})
export class RepoListComponent extends ComponentBase implements OnInit {
    constructor(public github: GithubService, private route: ActivatedRoute) {
        super();
    }
    
    org: string;
    repos: Observable<any>;
    
    ngOnInit() {
        super.ngOnInit();
        this.route.params.subscribe(params => {
            this.org = params['org'];
            if (this.org) this.repos = this.github.getReposForOrg(this.org);
        });
    }
}
