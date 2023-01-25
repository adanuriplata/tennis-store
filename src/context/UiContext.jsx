import React, { createContext, useState, useContext } from 'react';

const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState();
  const exposed = {
    openMenu,
    setOpenMenu,
  };
  return <UiContext.Provider value={exposed}>{children}</UiContext.Provider>;
};

export const useUiContext = () => useContext(UiContext);

// const Provider = ({ children }) => {
//   const [user, setUser] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const getUserProfile = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       console.log(data);

//       if (data.session) {
//         const { data: profile } = await supabase
//           .from("profile")
//           .select("*")
//           .eq("id", data.session?.user.id)
//           .single();

//         setUser({
//           ...data.session,
//           ...profile,
//         });

//         setIsLoading(false);
//       }
//     };

//     getUserProfile();

//     supabase.auth.onAuthStateChange(() => {
//       getUserProfile();
//     });d
//   }, []);

//   useEffect(() => {
//     axios.("/api/set-supabase-cookie", {
//       event: user ? "SIGNED_IN" : "SIGNED_OUT",
//       session: supabase.auth.session(),
//     })
//   })

//   const login = async () => {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: "github",
//     });
//     console.log(data, error);
//   };

//   const logout = async () => {
//     await supabase.auth.signOut();
//     setUser(null);
//     router.push("/");
//   };

//   const exposed = {
//     user,
//     login,
//     logout,
//     isLoading,
//   };

//   return <Context.Provider value={exposed}>{children}</Context.Provider>;
// };

// export const useUser = () => useContext(Context);

// export default Provider;
