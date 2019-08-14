import App from '../src/jsx/App'

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword } from '@babel/types';

configure({adapter: new Adapter()});

describe('<App/>', () =>{
    it('it needs to be rendered successfully.', ()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.length).toBe(1);
    })
})