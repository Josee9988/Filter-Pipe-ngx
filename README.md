# **FilterPipeNgx** for angular universal

**Simple angular pipe** that allows you to filter arrays of objects and simple arrays by a given text.

This *angular universal filter pipe* is able to filter by any field in your array of objects and can even ignore the **accent marks** or **upercase/lowercase** text. 

Originally filter pipe based on [solodynamo/ng2-search-filter](https://github.com/solodynamo/ng2-search-filter), please do check his project.

---

[![Version](https://badge.fury.io/js/%40josee9988%2Ffilter-pipe-ngx.svg)](https://www.npmjs.com/package/@josee9988/filter-pipe-ngx)
[![Downloads](https://img.shields.io/npm/dt/@josee9988/filter-pipe-ngx.svg)](https://www.npmjs.com/package/@josee9988/filter-pipe-ngx)

---

# Installation

1. Install the pipe to your project.
    
    ```bash
    npm i @josee9988/filter-pipe-ngx --save
   ```

2. Import the pipe to your `app.module.ts`.

    ```angular2
    import {FilterPipe} from '@josee9988/filter-pipe-ngx';
    ```

3. Declare and initialize the pipe to your project.

    ```angular2
    import {NgModule} from '@angular/core';
    // rest of your imports here...
    import {FilterPipe} from '@josee9988/filter-pipe-ngx'; // declare the pipe
    
    @NgModule({
      declarations: [
        FilterPipe, // add the pipe to your declarations
        // rest of the code ...
    ```

---

# Examples of use

[<img align="center" src="https://i.imgur.com/vi4Ii2u.gif" alt="example of other web">
](https://stackblitz.com/edit/filter-pipe-ngx)

Example of other web using it.

## Stackblitz example

[<img align="center" src="https://i.imgur.com/s25VibI.gif" alt="example of stackblitz">
](https://stackblitz.com/edit/filter-pipe-ngx)

Check the **[stackblitz example](https://stackblitz.com/edit/filter-pipe-ngx)** or simply click the above image!

## Direct component example

```angular2
import {Component} from '@angular/core';

@Component({
  selector: 'app-example-filter-pipe-products',
  template: `
<!-- Input in which you will filter your products (you array) -->
<input type="text" [(ngModel)]="searchText">

<!-- Display your data and filter it by your input -->
<div *ngFor = "let arrayItem of yourArrayToBeFiltered | filterPipe:searchText">

    <!-- Every object that matches the filter (if there is any filter) will be shown -->
  <p>Name: {{arrayItem.name}}, Inventory: {{arrayItem.inventory}}, price: {{arrayItem.price}}</p>
</div>`
})

export class ExampleFilterPipeProducts {
  yourArrayToBeFiltered: any[] = [
   {name: 'chair', inventory: 5, price: 45.99},
   {name: 'table', inventory: 10, price: 123.75},
   {name: 'sofa', inventory: 2, price: 399.50},
   {name: 'bed', inventory: 4, price: 592.12}];
  searchText: string;
}
```

For deeper information about angular pipes [check the oficial documentation](https://angular.io/guide/pipes).


---

### Did you enjoyed the package? Help us raise these numbers!

[![Github followers](https://img.shields.io/github/followers/Josee9988.svg?style=social)](#did-you-enjoyed-the-package-help-us-raise-these-numbers-up--)
[![Github stars](https://img.shields.io/github/stars/Josee9988/Filter-Pipe-ngx.svg?style=social)](#did-you-enjoyed-the-package-help-us-raise-these-numbers-up--)
[![Github watchers](https://img.shields.io/github/watchers/Josee9988/Filter-Pipe-ngx.svg?style=social)](#did-you-enjoyed-the-package-help-us-raise-these-numbers-up--)
[![Github forks](https://img.shields.io/github/forks/Josee9988/Filter-Pipe-ngx.svg?style=social)](#did-you-enjoyed-the-package-help-us-raise-these-numbers-up--)

Check the [npm page with the package](https://www.npmjs.com/package/@josee9988/filter-pipe-ngx).

---

_Made with a lot of ❤️❤️ by **[@Josee9988](https://github.com/Josee9988)**_
