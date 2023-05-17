import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allfilms:any[],searchkey:string,propertyname:string): any[] {
    const result:any=[]
    if(!allfilms||searchkey==''||propertyname==''){
      return allfilms
    }
    allfilms.forEach((film:any)=>{
      if(film[propertyname].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
        result.push(film)
      }
    })
    return result;
  }

}
