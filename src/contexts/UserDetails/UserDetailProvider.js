import UserDetailContext from './UserDetailContext';
import { useLocalStorage } from 'hooks';

function UserDetailProvider({ children }) {
    const [userDetailInfo, dispatchUserDetail] = useLocalStorage('userInfo', {
        email: '',
    });

    const storeUserInfo = (userDetails) => {
        dispatchUserDetail(userDetails);
    };

    return (
        <UserDetailContext.Provider
            value={{ userDetailInfo, dispatchUserDetail: storeUserInfo }}
        >
            {children}
        </UserDetailContext.Provider>
    );
}

export default UserDetailProvider;
