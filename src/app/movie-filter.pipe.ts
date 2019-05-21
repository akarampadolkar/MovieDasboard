import { PipeTransform ,Pipe} from '@angular/core';
//import { Movie } from './movie';


@Pipe({
    name: 'movieFilter'
})

export class MovieFilterPipe implements PipeTransform{
     transform(movies:any, searchTerm: String): any{
         if(!movies || !searchTerm){
             return movies;
         }

         return movies.filter(movies =>
         movies.original_title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
     }
}