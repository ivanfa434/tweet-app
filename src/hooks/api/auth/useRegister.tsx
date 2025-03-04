import { BASE_URL } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
      toast.success("Register Berhasil");
      router.push("/login");
    },
    onError: () => {
      toast.error("Register gagal");
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