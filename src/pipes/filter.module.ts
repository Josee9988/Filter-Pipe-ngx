import {NgModule} from '@angular/core';
import {FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  imports: [],
  exports: [FilterPipe],
  providers: [],
  bootstrap: []
})
class FilterModule {}

export * from './filter.pipe';
