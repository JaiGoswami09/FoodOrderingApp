export const CDN_URL = 
     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzPo9uv7MUCwwLTBVLgf29PIwG_Or3n2uVw&s";

/** *****
export default CDN_URL;
export default LOGO_URL;

== There are two types of Exports/Import.

1) Default Export/Import
       export default Component;
       import Component from "path";

2) Named Export/Import
        export const Component;
        import {Component} from "path";

//we cannot do this as one file can have only one export statement.
//So we will use another way to export i.e named export.
//For that we will write export in front of const CDN_URL & const LOGO_URL.
// There is a different way to import named export files. for that check RestaurantCars.js
*/