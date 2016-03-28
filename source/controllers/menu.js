import BaseController from './base';
import MenuComponent from '../components/menu.jsx';

class MenuController extends BaseController {
    constructor(element) {
        super(element, MenuComponent);
    }
}

export default MenuController;