/*import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from '../models/Tasks';
import { NumberSymbol } from '@angular/common';

@Pipe({
    name: 'FilterPipe',
    pure:false
})

export class FilterPipe implements PipeTransform {
    transform(items: Array<TaskModel>, tasknameSearch: string, parentTasknameSearch: string, priorotyFromSearch: number,priorityToSearch:number,startDateSearch:Date,endDateSearch:Date){
        if (items && items.length){
            return items.filter(item =>{
                if (tasknameSearch && item.TaskName.toLowerCase().indexOf(tasknameSearch.toLowerCase()) === -1){
                    return false;
                }
                if (parentTasknameSearch && item.ParentTaskName.toLowerCase().indexOf(parentTasknameSearch.toLowerCase()) === -1){
                    return false;
                }
                if (item.Priority < priorotyFromSearch) {                    
                    return false;
                }
                if (item.Priority > priorityToSearch) {
                    return false;
                }
                if (startDateSearch && item.StartDate < startDateSearch) {
                    return false;
                }
                if (endDateSearch && item.EndDate >= endDateSearch) {
                    return false;
                }

                return true;
           })
        }
        else{
            return items;
        }
    }
}*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {

        if (!value) { return null; }
        if (!args) { return value; }

        args = args.toLowerCase();

        return value.filter(function (item: any) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
