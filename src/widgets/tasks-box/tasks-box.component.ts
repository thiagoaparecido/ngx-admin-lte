import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component( {
    /* tslint:disable */
    selector: '.tasksBox',
    /* tslint:enable */
    styleUrls: ['./tasks-box.component.css'],
    templateUrl: './tasks-box.component.html'
})
export class TasksBoxComponent implements OnInit {

    messages: Message[];
    tasksLength: {} = { 0: 0 };
    @Input() public user;

    constructor() {}

    public ngOnInit() {}

}
