import BaseController from './base';
import HomeComponent from '../components/home.jsx';

class HomeController extends BaseController {
    constructor(element) {
        super(element, HomeComponent);
    }
}

export default HomeController;