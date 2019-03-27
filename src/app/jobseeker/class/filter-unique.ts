import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'filterUnique',
    pure: false
})
export class FilterUnique implements PipeTransform{
    transform(list: any[], filterText: string): any {
        return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
    }
}
