import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'services';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './repo-browser.html',
    styleUrls: ['./repo-browser.scss']
})
export class RepoBrowserComponent extends ComponentBase {
    constructor(private router: Router, private github: GithubService) {
        super();
    }
    
    searchForOrg(orgName: string) {
        this.github.getOrg(orgName)
            .subscribe(({name}) => {
                console.log(name);
                this.router.navigate(['/github', orgName]);
            });
    }
}
