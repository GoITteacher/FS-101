/* 
import './modules/header';
import './modules/container';
import './modules/footer';
import './modules/modal';
*/
/* 
import { t, y, x } from './modules/test';
import { foo as sayHello } from './modules/test';
import Item from './modules/item';
import * as userData from './modules/test'; 
*/

// import { faker } from '@faker-js/faker';
// console.log(faker.internet.email());

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);

instance.show();
