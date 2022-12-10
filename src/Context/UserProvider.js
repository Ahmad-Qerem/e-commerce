import { createContext } from "react";

const UserProvider = createContext(null);
const useUserProvider = () => {
  return useContext(UserProvider);
};

const UserProviderContext = ({ children }) => {
  const [User, SetUser] = useState(null);
  const UserProviderValue = useMemo(() => ({ User, SetUser }), [User, SetUser]);

  return (
    <UserProvider.Provider value={UserProviderValue}>
      {children}
    </UserProvider.Provider>
  );
};
