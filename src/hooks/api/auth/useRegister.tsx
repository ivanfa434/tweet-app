import { BASE_URL } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: Payload) => {
      await axios.post(BASE_URL + "/users/register", {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      });
    },
    onSuccess: () => {
      alert("Register Berhasil");
      router.push("/login");
    },
    onError: () => {
      alert("Register gagal");
    },
  });
  //   const [isLoading, setIsLoading] = useState(false);

  //   const register = async (payload: Payload) => {
  //     setIsLoading(true);
  //     try {
  //       const { firstName, lastName, email, password } = payload;

  //       await axios.post(BASE_URL + "/users/register", {
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   return { register, isLoading };
};

export default useRegister;
