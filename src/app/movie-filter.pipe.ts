import { PipeTransform ,Pipe} from '@angular/core';
import { Movie } from './movie';


@Pipe({
    name: 'movieFilter'
})

export class MovieFilterPipe implements PipeTransform{
     transform(movies:Movie[], searchTerm: String): Movie[]{
         if(!movies || !searchTerm){
             return movies;
         }

         return movies.filter(movies =>
         movies.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
     }
}