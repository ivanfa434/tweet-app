import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/user";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner"
import { useRouter } from "next/navigation";

interface Payload {
  login: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const { data } = await axiosInstance.post<User>("/users/login", {
        login: payload.login,
        password: payload.password,
      });
      // console.log("ini response dari backendless", data);
      return data
      
    },
    onSuccess: (data) => {
      dispatch(loginAction(data))
      localStorage.setItem("tweet-storage", JSON.stringify(data))
      // memasukkan data ke  store
      toast.success("login berhasil")
      // alert("Login berhasil");
      router.push("/");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data.message);
    },
  });
};

export default useLogin;
