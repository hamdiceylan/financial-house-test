import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from './LoginPage';


describe('LoginPage', () =>{
    const handleSubmit = jest.fn();
    const login = jest.fn();
    
    const props = { 
        login, 
        handleSubmit, 
        error: '', 
        history: '' 
    };

    const loginPage = shallow(<LoginPage {...props} />);

    it('renders correctly', () => {
        expect(loginPage).toMatchSnapshot();
    })

    it('click login button', () => {
        loginPage.find('.btn-login').simulate('click');
        expect(handleSubmit).toHaveBeenCalled();
    });
})

