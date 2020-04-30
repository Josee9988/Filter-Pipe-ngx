import {NgModule} from '@angular/core';
import {FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  imports: [],
  exports: [FilterPipe],
  providers: [],
  bootstrap: []
})
export class FilterModule {}

export {FilterPipe} from './filter.pipe';
