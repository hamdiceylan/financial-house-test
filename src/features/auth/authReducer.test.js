import authReducer from './authReducer';
import * as constants from './authConstants';

describe('authReducer', () => {
    
    it('should set state with correct user data after login', () => {
        let loginData = {
            body: {
                token : "sampleTokenComesHere",
                status: "APPROVED"
            }
        }
        expect(authReducer(undefined, { type: constants.LOGIN_USER, payload: loginData }).currentUser)
            .toEqual(loginData.body);
    });

});