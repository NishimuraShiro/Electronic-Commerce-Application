"use client";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Alert,
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RequiredMark } from "@/components/ui/RequiredMark";
import { OptionalMark } from "@/components/ui/OptionalMark";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setIsError(false);
    setErrorMessage("");

    try {
      const sendData = await fetch(
        "https://ec-app-backend-67e3477cc04a.herokuapp.com/api/v1/auth/",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: data.get("email"),
            password: data.get("password"),
            password_confirmation: data.get("password_confirmation"),
            name: data.get("name"),
            confirm_success_url: "https://google.com",
          }),
        }
      );

      console.log(sendData);

      if (!sendData.ok) {
        setIsError(true);
        setErrorMessage("データの送信に失敗しました。");
        return;
      }

      const responseData = await sendData.json();
      const userId = responseData.data.id;

      if (userId) {
        setIsError(false);
        setErrorMessage("");

        router.push("/login");
      } else {
        setIsError(true);
        setErrorMessage("必須事項を入力してください。");
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage("エラーが発生しました。");
    }
  };

  return (
    <div className="m-4">
      <div className="flex justify-center items-center">
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <li className="list-none">
            <div className="flex items-center">
              <h2 className="text-xl">ユーザー名</h2>
              <RequiredMark />
            </div>
            <TextField name="name" sx={{ width: "288px" }} variant="outlined" />
          </li>
          <li className="mt-12 list-none">
            <div className="flex items-center">
              <h2 className="text-xl">ニックネーム</h2>
              <OptionalMark />
            </div>
            <TextField
              name="nickname"
              sx={{ width: "288px" }}
              variant="outlined"
            />
          </li>
          <li className="mt-12 list-none">
            <div className="flex items-center">
              <h2 className="text-xl">メールアドレス</h2>
              <RequiredMark />
            </div>
            <TextField
              name="email"
              sx={{ width: "288px" }}
              variant="outlined"
            />
          </li>
          <li className="mt-12 list-none">
            <div className="flex items-center">
              <h2 className="text-xl">パスワード</h2>
              <RequiredMark />
            </div>
            <FormControl sx={{ width: "288px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
              />
            </FormControl>
          </li>
          <li className="mt-12 list-none">
            <div className="flex items-center">
              <h2 className="text-xl">パスワード（確認用）</h2>
              <RequiredMark />
            </div>
            <FormControl sx={{ width: "288px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password_confirmation"
              />
            </FormControl>
          </li>
          <button
            type="submit"
            className="w-72 h-12 mx-auto mt-12 rounded-3xl bg-emerald-200 text-center text-xl block"
          >
            <p>確認</p>
          </button>
          {isError ? (
            <Alert
              className="mt-2"
              severity="error"
              onClose={() => {
                setIsError(false);
                setErrorMessage("");
              }}
            >
              {errorMessage}
            </Alert>
          ) : null}
          <Grid className="mt-8" justifyContent="flex-end">
            <Link href="../login" variant="subtitle1">
              すでにアカウントをお持ちの方はこちらへ
            </Link>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default RegisterPage;

// "use client";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import {
//   Alert,
//   Box,
//   FormControl,
//   Grid,
//   IconButton,
//   InputAdornment,
//   InputLabel,
//   Link,
//   OutlinedInput,
//   TextField
// } from "@mui/material";
// import { setCookie, destroyCookie, parseCookies } from "nookies";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { RequiredMark } from "@/components/ui/RequiredMark";
// import { OptionalMark } from "@/components/ui/OptionalMark";

// const RegisterPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//   };

//   const [isError, setIsError] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string>("");
//   const router = useRouter();

//   const handleSubmit = async (event: any) => {
//     const data = new FormData(event.currentTarget);

//     setIsError(false);
//     setErrorMessage("");

//     try {
//       const savedData = parseCookies();
//       const { uid, client, accessToken } = savedData;
//       const sendData = await fetch("http://localhost:3001/api/v1/auth/", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json"
//         },
//         body: JSON.stringify({
//           name: data.get("name"),
//           nickname: data.get("nickname"),
//           email: data.get("email"),
//           password: data.get("password"),
//           password_confirmation: data.get("password_confirmation")
//         })
//       });
//       console.log(sendData);

//       if (!sendData.ok) {
//         setIsError(true);
//         setErrorMessage("データの送信に失敗しました。");
//       }

//       const responseData = await sendData.json();
//       const userId = responseData.data.id;

//       if (userId) {
//         setCookie(null, "uid", uid, { path: "/" });
//         setCookie(null, "client", client, { path: "/" });
//         setCookie(null, "accessToken", accessToken, { path: "/" });
//         setIsError(false);
//         setErrorMessage("");

//         router.push(`/top/${userId}`);
//       } else {
//         setIsError(true);
//         setErrorMessage("必須事項を入力してください。");
//       }
//     } catch (error) {
//       // Cookieからトークンを削除しています
//       destroyCookie(null, "uid");
//       destroyCookie(null, "client");
//       destroyCookie(null, "access-token");
//       setIsError(true);
//       setErrorMessage("エラーが発生しました。");
//     }
//   };
//   return (
//     <div className="m-4">
//       <div className="flex justify-center items-center">
//         <Box component="form" noValidate onSubmit={handleSubmit}>
//           <li className="list-none">
//             <div className="flex items-center">
//               <h2 className="text-xl">ユーザー名</h2>
//               <RequiredMark />
//             </div>
//             <TextField name="name" sx={{ width: "288px" }} variant="outlined" />
//           </li>
//           <li className="mt-12 list-none">
//             <div className="flex items-center">
//               <h2 className="text-xl">ニックネーム</h2>
//               <OptionalMark />
//             </div>
//             <TextField
//               name="nickname"
//               sx={{ width: "288px" }}
//               variant="outlined"
//             />
//           </li>
//           <li className="mt-12 list-none">
//             <div className="flex items-center">
//               <h2 className="text-xl">メールアドレス</h2>
//               <RequiredMark />
//             </div>
//             <TextField
//               name="email"
//               sx={{ width: "288px" }}
//               variant="outlined"
//             />
//           </li>
//           <li className="mt-12 list-none">
//             <div className="flex items-center">
//               <h2 className="text-xl">パスワード</h2>
//               <RequiredMark />
//             </div>
//             <FormControl sx={{ width: "288px" }} variant="outlined">
//               <InputLabel htmlFor="outlined-adornment-password">
//                 Password
//               </InputLabel>
//               <OutlinedInput
//                 id="outlined-adornment-password"
//                 type={showPassword ? "text" : "password"}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//                 label="Password"
//                 name="password"
//               />
//             </FormControl>
//           </li>
//           <li className="mt-12 list-none">
//             <div className="flex items-center">
//               <h2 className="text-xl">パスワード（確認用）</h2>
//               <RequiredMark />
//             </div>
//             <FormControl sx={{ width: "288px" }} variant="outlined">
//               <InputLabel htmlFor="outlined-adornment-password">
//                 Password
//               </InputLabel>
//               <OutlinedInput
//                 id="outlined-adornment-password"
//                 type={showPassword ? "text" : "password"}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//                 label="Password"
//                 name="password_confirmation"
//               />
//             </FormControl>
//           </li>
//           <button
//             type="submit"
//             className="w-72 h-12 mx-auto mt-12 rounded-3xl bg-emerald-200 text-center text-xl block"
//           >
//             <p>確認</p>
//           </button>
//           {isError ? (
//             <Alert
//               className="mt-2"
//               severity="error"
//               onClose={() => {
//                 setIsError(false);
//                 setErrorMessage("");
//               }}
//             >
//               {errorMessage}
//             </Alert>
//           ) : null}
//           <Grid className="mt-8" justifyContent="flex-end">
//             <Link href="../login" variant="subtitle1">
//               すでにアカウントをお持ちの方はこちらへ
//             </Link>
//           </Grid>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
