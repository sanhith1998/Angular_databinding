import { Component } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl:'./servers.component.html',
    styleUrls:['./servers.component.css']
})


export class ServersComponent{
    allowNewServer = false;
    serverCreationstatus = 'No server Was Created!!';
    serverName = '';
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    onCreateServer() {
        return this.serverCreationstatus = "Server was Created!! Name is "+this.serverName;
        }
    onUpdateServer(event: any) {
        this.serverName = event.target.value;
        }
}